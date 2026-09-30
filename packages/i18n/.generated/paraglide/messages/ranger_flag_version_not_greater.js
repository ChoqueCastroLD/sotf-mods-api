/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Version_Not_GreaterInputs */

const en_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version is not newer than the last one`)
};

const es_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versión no es más nueva que la anterior`)
};

const de_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version ist nicht neuer als die letzte`)
};

const fr_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version pas plus récente que la précédente`)
};

const it_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versione non è più recente della precedente`)
};

const nl_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie is niet nieuwer dan de vorige`)
};

const pl_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja nie jest nowsza od poprzedniej`)
};

const pt_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A versão não é mais nova que a anterior`)
};

const ru_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия не новее предыдущей`)
};

const sv_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen är inte nyare än den förra`)
};

const tr_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm öncekinden yeni değil`)
};

const zh_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本不比上一个新`)
};

const ja_ranger_flag_version_not_greater = /** @type {(inputs: Ranger_Flag_Version_Not_GreaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンが前回より新しくありません`)
};

/**
* | output |
* | --- |
* | "Version is not newer than the last one" |
*
* @param {Ranger_Flag_Version_Not_GreaterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_version_not_greater = /** @type {((inputs?: Ranger_Flag_Version_Not_GreaterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Version_Not_GreaterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_version_not_greater(inputs)
	if (locale === "de") return de_ranger_flag_version_not_greater(inputs)
	if (locale === "fr") return fr_ranger_flag_version_not_greater(inputs)
	if (locale === "it") return it_ranger_flag_version_not_greater(inputs)
	if (locale === "nl") return nl_ranger_flag_version_not_greater(inputs)
	if (locale === "pl") return pl_ranger_flag_version_not_greater(inputs)
	if (locale === "pt") return pt_ranger_flag_version_not_greater(inputs)
	if (locale === "ru") return ru_ranger_flag_version_not_greater(inputs)
	if (locale === "sv") return sv_ranger_flag_version_not_greater(inputs)
	if (locale === "tr") return tr_ranger_flag_version_not_greater(inputs)
	if (locale === "zh") return zh_ranger_flag_version_not_greater(inputs)
	if (locale === "ja") return ja_ranger_flag_version_not_greater(inputs)
	return en_ranger_flag_version_not_greater(inputs)
});
