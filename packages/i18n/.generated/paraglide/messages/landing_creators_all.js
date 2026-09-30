/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Creators_AllInputs */

const en_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All creators`)
};

const es_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los creadores`)
};

const de_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Ersteller`)
};

const fr_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les créateurs`)
};

const it_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i creatori`)
};

const nl_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle makers`)
};

const pl_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszyscy twórcy`)
};

const pt_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os criadores`)
};

const ru_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все авторы`)
};

const sv_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla skapare`)
};

const tr_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm yapımcılar`)
};

const zh_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部创作者`)
};

const ja_landing_creators_all = /** @type {(inputs: Landing_Creators_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのクリエイター`)
};

/**
* | output |
* | --- |
* | "All creators" |
*
* @param {Landing_Creators_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_creators_all = /** @type {((inputs?: Landing_Creators_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Creators_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_creators_all(inputs)
	if (locale === "de") return de_landing_creators_all(inputs)
	if (locale === "fr") return fr_landing_creators_all(inputs)
	if (locale === "it") return it_landing_creators_all(inputs)
	if (locale === "nl") return nl_landing_creators_all(inputs)
	if (locale === "pl") return pl_landing_creators_all(inputs)
	if (locale === "pt") return pt_landing_creators_all(inputs)
	if (locale === "ru") return ru_landing_creators_all(inputs)
	if (locale === "sv") return sv_landing_creators_all(inputs)
	if (locale === "tr") return tr_landing_creators_all(inputs)
	if (locale === "zh") return zh_landing_creators_all(inputs)
	if (locale === "ja") return ja_landing_creators_all(inputs)
	return en_landing_creators_all(inputs)
});
