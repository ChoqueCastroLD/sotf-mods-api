/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_ForbiddenInputs */

const en_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can’t review this mod yet: reviews need a verified e-mail and an account at least 24 hours old, and creators can’t review their own mods.`)
};

const es_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no puedes reseñar este mod: se necesita un correo verificado y una cuenta con al menos 24 horas, y los creadores no pueden reseñar sus propios mods.`)
};

const de_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kannst diesen Mod noch nicht bewerten: Dafür brauchst du eine bestätigte E-Mail-Adresse und ein mindestens 24 Stunden altes Konto, und Ersteller können ihre eigenen Mods nicht bewerten.`)
};

const fr_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne pouvez pas encore noter ce mod : il faut un e-mail vérifié et un compte d’au moins 24 heures, et les créateurs ne peuvent pas noter leurs propres mods.`)
};

const it_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non puoi ancora recensire questa mod: servono un’e-mail verificata e un account di almeno 24 ore, e i creatori non possono recensire le proprie mod.`)
};

const nl_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt deze mod nog niet reviewen: daarvoor heb je een bevestigd e-mailadres en een account van minstens 24 uur nodig, en makers kunnen hun eigen mods niet reviewen.`)
};

const pl_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie możesz jeszcze zrecenzować tego moda: potrzebny jest zweryfikowany e-mail i konto starsze niż 24 godziny, a twórcy nie mogą recenzować własnych modów.`)
};

const pt_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ainda não pode avaliar este mod: é preciso um e-mail verificado e uma conta com pelo menos 24 horas, e criadores não podem avaliar os próprios mods.`)
};

const ru_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока нельзя оставить отзыв: нужен подтверждённый e-mail и аккаунт старше 24 часов, а авторы не могут оценивать свои моды.`)
};

const sv_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan inte recensera den här modden än: det krävs en verifierad e-post och ett konto som är minst 24 timmar gammalt, och skapare kan inte recensera sina egna moddar.`)
};

const tr_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modu henüz inceleyemezsin: doğrulanmış bir e-posta ve en az 24 saatlik bir hesap gerekir; yapımcılar kendi modlarını inceleyemez.`)
};

const zh_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你暂时不能评价这个模组：需要已验证的邮箱和注册满 24 小时的账号，且作者不能评价自己的模组。`)
};

const ja_social_review_forbidden = /** @type {(inputs: Social_Review_ForbiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだこの MOD をレビューできません。確認済みのメールアドレスと作成から 24 時間以上たったアカウントが必要です。作者は自分の MOD をレビューできません。`)
};

/**
* | output |
* | --- |
* | "You can’t review this mod yet: reviews need a verified e-mail and an account at least 24 hours old, and creators can’t review their own mods." |
*
* @param {Social_Review_ForbiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_forbidden = /** @type {((inputs?: Social_Review_ForbiddenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_ForbiddenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_forbidden(inputs)
	if (locale === "de") return de_social_review_forbidden(inputs)
	if (locale === "fr") return fr_social_review_forbidden(inputs)
	if (locale === "it") return it_social_review_forbidden(inputs)
	if (locale === "nl") return nl_social_review_forbidden(inputs)
	if (locale === "pl") return pl_social_review_forbidden(inputs)
	if (locale === "pt") return pt_social_review_forbidden(inputs)
	if (locale === "ru") return ru_social_review_forbidden(inputs)
	if (locale === "sv") return sv_social_review_forbidden(inputs)
	if (locale === "tr") return tr_social_review_forbidden(inputs)
	if (locale === "zh") return zh_social_review_forbidden(inputs)
	if (locale === "ja") return ja_social_review_forbidden(inputs)
	return en_social_review_forbidden(inputs)
});
