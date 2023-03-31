import jwt from "jsonwebtoken"

export const checkAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (token !== undefined) {
        try {
            jwt.verify(token, process.env.OWNER_SECRET)
            next()
        } catch (err) {
            return res.status(401).json({ message: "Неверный токен доступа." })
        }
    } else {
        return res.status(401).json({ message: "Необходим токен доступа." })
    }
}
