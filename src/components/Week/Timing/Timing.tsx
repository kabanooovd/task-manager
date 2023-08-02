import s from './Timing.module.scss'

export const Timing: React.FC<{}> = () => {
    return (
        <>
            {Array(24)
                .fill(null)
                .map((_, idx) => {
                    return <div key={idx} className={s.container} />
                })}
        </>
    )
}
