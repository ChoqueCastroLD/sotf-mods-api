/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Unlink_TitleInputs */

const en_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlink Discord?`)
};

const es_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Desvincular Discord?`)
};

const de_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord trennen?`)
};

const fr_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dissocier Discord ?`)
};

const it_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scollegare Discord?`)
};

const nl_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord ontkoppelen?`)
};

const pl_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odłączyć Discord?`)
};

const pt_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desvincular o Discord?`)
};

const ru_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отвязать Discord?`)
};

const sv_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla från Discord?`)
};

const tr_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord bağlantısı kaldırılsın mı?`)
};

const zh_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消关联 Discord？`)
};

const ja_oauth_unlink_title = /** @type {(inputs: Oauth_Unlink_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord の連携を解除しますか？`)
};

/**
* | output |
* | --- |
* | "Unlink Discord?" |
*
* @param {Oauth_Unlink_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_unlink_title = /** @type {((inputs?: Oauth_Unlink_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Unlink_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_unlink_title(inputs)
	if (locale === "de") return de_oauth_unlink_title(inputs)
	if (locale === "fr") return fr_oauth_unlink_title(inputs)
	if (locale === "it") return it_oauth_unlink_title(inputs)
	if (locale === "nl") return nl_oauth_unlink_title(inputs)
	if (locale === "pl") return pl_oauth_unlink_title(inputs)
	if (locale === "pt") return pt_oauth_unlink_title(inputs)
	if (locale === "ru") return ru_oauth_unlink_title(inputs)
	if (locale === "sv") return sv_oauth_unlink_title(inputs)
	if (locale === "tr") return tr_oauth_unlink_title(inputs)
	if (locale === "zh") return zh_oauth_unlink_title(inputs)
	if (locale === "ja") return ja_oauth_unlink_title(inputs)
	return en_oauth_unlink_title(inputs)
});
