/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Env_DevelopmentInputs */

const en_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Development build`)
};

const es_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión de desarrollo`)
};

const de_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwicklungsversion`)
};

const fr_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version de développement`)
};

const it_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione di sviluppo`)
};

const nl_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontwikkelversie`)
};

const pl_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja deweloperska`)
};

const pt_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão de desenvolvimento`)
};

const ru_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия для разработки`)
};

const sv_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvecklingsversion`)
};

const tr_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geliştirme sürümü`)
};

const zh_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开发版本`)
};

const ja_common_env_development = /** @type {(inputs: Common_Env_DevelopmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開発版`)
};

/**
* | output |
* | --- |
* | "Development build" |
*
* @param {Common_Env_DevelopmentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_env_development = /** @type {((inputs?: Common_Env_DevelopmentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Env_DevelopmentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_env_development(inputs)
	if (locale === "de") return de_common_env_development(inputs)
	if (locale === "fr") return fr_common_env_development(inputs)
	if (locale === "it") return it_common_env_development(inputs)
	if (locale === "nl") return nl_common_env_development(inputs)
	if (locale === "pl") return pl_common_env_development(inputs)
	if (locale === "pt") return pt_common_env_development(inputs)
	if (locale === "ru") return ru_common_env_development(inputs)
	if (locale === "sv") return sv_common_env_development(inputs)
	if (locale === "tr") return tr_common_env_development(inputs)
	if (locale === "zh") return zh_common_env_development(inputs)
	if (locale === "ja") return ja_common_env_development(inputs)
	return en_common_env_development(inputs)
});
