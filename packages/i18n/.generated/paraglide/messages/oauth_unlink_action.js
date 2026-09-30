/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Unlink_ActionInputs */

const en_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlink`)
};

const es_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desvincular`)
};

const de_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trennen`)
};

const fr_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dissocier`)
};

const it_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scollega`)
};

const nl_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontkoppelen`)
};

const pl_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odłącz`)
};

const pt_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desvincular`)
};

const ru_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отвязать`)
};

const sv_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla från`)
};

const tr_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantıyı kaldır`)
};

const zh_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消关联`)
};

const ja_oauth_unlink_action = /** @type {(inputs: Oauth_Unlink_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`連携を解除`)
};

/**
* | output |
* | --- |
* | "Unlink" |
*
* @param {Oauth_Unlink_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_unlink_action = /** @type {((inputs?: Oauth_Unlink_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Unlink_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_unlink_action(inputs)
	if (locale === "de") return de_oauth_unlink_action(inputs)
	if (locale === "fr") return fr_oauth_unlink_action(inputs)
	if (locale === "it") return it_oauth_unlink_action(inputs)
	if (locale === "nl") return nl_oauth_unlink_action(inputs)
	if (locale === "pl") return pl_oauth_unlink_action(inputs)
	if (locale === "pt") return pt_oauth_unlink_action(inputs)
	if (locale === "ru") return ru_oauth_unlink_action(inputs)
	if (locale === "sv") return sv_oauth_unlink_action(inputs)
	if (locale === "tr") return tr_oauth_unlink_action(inputs)
	if (locale === "zh") return zh_oauth_unlink_action(inputs)
	if (locale === "ja") return ja_oauth_unlink_action(inputs)
	return en_oauth_unlink_action(inputs)
});
