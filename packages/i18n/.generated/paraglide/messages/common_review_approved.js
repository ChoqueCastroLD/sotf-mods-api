/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Review_ApprovedInputs */

const en_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approved. Your mod is live on the island.`)
};

const es_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprobado. Tu mod ya está en la isla.`)
};

const de_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freigegeben. Dein Mod ist jetzt auf der Insel.`)
};

const fr_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approuvé. Votre mod est en ligne sur l’île.`)
};

const it_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approvata. La tua mod è online sull’isola.`)
};

const nl_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Goedgekeurd. Je mod staat live op het eiland.`)
};

const pl_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zatwierdzono. Twój mod jest już na wyspie.`)
};

const pt_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprovado. Seu mod já está na ilha.`)
};

const ru_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одобрено. Ваш мод уже на острове.`)
};

const sv_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Godkänd. Din modd finns nu på ön.`)
};

const tr_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onaylandı. Modun artık adada.`)
};

const zh_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已通过。你的模组已登上这座岛。`)
};

const ja_common_review_approved = /** @type {(inputs: Common_Review_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認されました。あなたの MOD が島に公開されました。`)
};

/**
* | output |
* | --- |
* | "Approved. Your mod is live on the island." |
*
* @param {Common_Review_ApprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_review_approved = /** @type {((inputs?: Common_Review_ApprovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Review_ApprovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_review_approved(inputs)
	if (locale === "de") return de_common_review_approved(inputs)
	if (locale === "fr") return fr_common_review_approved(inputs)
	if (locale === "it") return it_common_review_approved(inputs)
	if (locale === "nl") return nl_common_review_approved(inputs)
	if (locale === "pl") return pl_common_review_approved(inputs)
	if (locale === "pt") return pt_common_review_approved(inputs)
	if (locale === "ru") return ru_common_review_approved(inputs)
	if (locale === "sv") return sv_common_review_approved(inputs)
	if (locale === "tr") return tr_common_review_approved(inputs)
	if (locale === "zh") return zh_common_review_approved(inputs)
	if (locale === "ja") return ja_common_review_approved(inputs)
	return en_common_review_approved(inputs)
});
