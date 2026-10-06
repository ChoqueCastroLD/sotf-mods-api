/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Me_Followed_OnInputs */

const en_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`followed ${i?.date}`)
};

const es_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`seguido el ${i?.date}`)
};

const de_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`gefolgt am ${i?.date}`)
};

const fr_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`suivi le ${i?.date}`)
};

const it_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`seguita il ${i?.date}`)
};

const nl_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`gevolgd op ${i?.date}`)
};

const pl_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`obserwowany od ${i?.date}`)
};

const pt_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`seguido em ${i?.date}`)
};

const ru_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`подписка с ${i?.date}`)
};

const sv_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`följd sedan ${i?.date}`)
};

const tr_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinden beri takipte`)
};

const zh_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} 关注`)
};

const ja_me_followed_on = /** @type {(inputs: Me_Followed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} にフォロー`)
};

/**
* | output |
* | --- |
* | "followed {date}" |
*
* @param {Me_Followed_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_followed_on = /** @type {((inputs: Me_Followed_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Followed_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_followed_on(inputs)
	if (locale === "de") return de_me_followed_on(inputs)
	if (locale === "fr") return fr_me_followed_on(inputs)
	if (locale === "it") return it_me_followed_on(inputs)
	if (locale === "nl") return nl_me_followed_on(inputs)
	if (locale === "pl") return pl_me_followed_on(inputs)
	if (locale === "pt") return pt_me_followed_on(inputs)
	if (locale === "ru") return ru_me_followed_on(inputs)
	if (locale === "sv") return sv_me_followed_on(inputs)
	if (locale === "tr") return tr_me_followed_on(inputs)
	if (locale === "zh") return zh_me_followed_on(inputs)
	if (locale === "ja") return ja_me_followed_on(inputs)
	return en_me_followed_on(inputs)
});
