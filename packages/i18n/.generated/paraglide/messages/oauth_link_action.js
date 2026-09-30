/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Link_ActionInputs */

const en_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link Discord`)
};

const es_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincular Discord`)
};

const de_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord verknüpfen`)
};

const fr_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lier Discord`)
};

const it_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collega Discord`)
};

const nl_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord koppelen`)
};

const pl_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Połącz Discord`)
};

const pt_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincular Discord`)
};

const ru_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Привязать Discord`)
};

const sv_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla Discord`)
};

const tr_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord’u bağla`)
};

const zh_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关联 Discord`)
};

const ja_oauth_link_action = /** @type {(inputs: Oauth_Link_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord を連携`)
};

/**
* | output |
* | --- |
* | "Link Discord" |
*
* @param {Oauth_Link_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_link_action = /** @type {((inputs?: Oauth_Link_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_link_action(inputs)
	if (locale === "de") return de_oauth_link_action(inputs)
	if (locale === "fr") return fr_oauth_link_action(inputs)
	if (locale === "it") return it_oauth_link_action(inputs)
	if (locale === "nl") return nl_oauth_link_action(inputs)
	if (locale === "pl") return pl_oauth_link_action(inputs)
	if (locale === "pt") return pt_oauth_link_action(inputs)
	if (locale === "ru") return ru_oauth_link_action(inputs)
	if (locale === "sv") return sv_oauth_link_action(inputs)
	if (locale === "tr") return tr_oauth_link_action(inputs)
	if (locale === "zh") return zh_oauth_link_action(inputs)
	if (locale === "ja") return ja_oauth_link_action(inputs)
	return en_oauth_link_action(inputs)
});
