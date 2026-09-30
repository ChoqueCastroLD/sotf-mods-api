/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Own_ModInputs */

const en_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is your mod: you can reply to each review once.`)
};

const es_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es tu mod: puedes responder una vez a cada reseña.`)
};

const de_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das ist dein Mod: Du kannst auf jede Bewertung einmal antworten.`)
};

const fr_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’est votre mod : vous pouvez répondre une fois à chaque avis.`)
};

const it_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È la tua mod: puoi rispondere una volta a ogni recensione.`)
};

const nl_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is jouw mod: je kunt één keer op elke review reageren.`)
};

const pl_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To twój mod: możesz raz odpowiedzieć na każdą recenzję.`)
};

const pt_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este é o seu mod: você pode responder uma vez a cada avaliação.`)
};

const ru_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это ваш мод: на каждый отзыв можно ответить один раз.`)
};

const sv_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här är din modd: du kan svara en gång på varje recension.`)
};

const tr_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu senin modun: her incelemeye bir kez yanıt verebilirsin.`)
};

const zh_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这是你的模组：每条评价你都可以回复一次。`)
};

const ja_social_review_own_mod = /** @type {(inputs: Social_Review_Own_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの MOD です。各レビューに 1 回ずつ返信できます。`)
};

/**
* | output |
* | --- |
* | "This is your mod: you can reply to each review once." |
*
* @param {Social_Review_Own_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_own_mod = /** @type {((inputs?: Social_Review_Own_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Own_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_own_mod(inputs)
	if (locale === "de") return de_social_review_own_mod(inputs)
	if (locale === "fr") return fr_social_review_own_mod(inputs)
	if (locale === "it") return it_social_review_own_mod(inputs)
	if (locale === "nl") return nl_social_review_own_mod(inputs)
	if (locale === "pl") return pl_social_review_own_mod(inputs)
	if (locale === "pt") return pt_social_review_own_mod(inputs)
	if (locale === "ru") return ru_social_review_own_mod(inputs)
	if (locale === "sv") return sv_social_review_own_mod(inputs)
	if (locale === "tr") return tr_social_review_own_mod(inputs)
	if (locale === "zh") return zh_social_review_own_mod(inputs)
	if (locale === "ja") return ja_social_review_own_mod(inputs)
	return en_social_review_own_mod(inputs)
});
