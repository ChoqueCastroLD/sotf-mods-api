/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Pin_ErrorInputs */

const en_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t load the versions.`)
};

const es_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se han podido cargar las versiones.`)
};

const de_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Versionen konnten nicht geladen werden.`)
};

const fr_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les versions.`)
};

const it_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare le versioni.`)
};

const nl_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De versies konden niet worden geladen.`)
};

const pl_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać wersji.`)
};

const pt_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar as versões.`)
};

const ru_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить версии.`)
};

const sv_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att ladda versionerna.`)
};

const tr_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümler yüklenemedi.`)
};

const zh_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本加载失败。`)
};

const ja_kits_pin_error = /** @type {(inputs: Kits_Pin_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンを読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "Couldn’t load the versions." |
*
* @param {Kits_Pin_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_pin_error = /** @type {((inputs?: Kits_Pin_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Pin_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_pin_error(inputs)
	if (locale === "de") return de_kits_pin_error(inputs)
	if (locale === "fr") return fr_kits_pin_error(inputs)
	if (locale === "it") return it_kits_pin_error(inputs)
	if (locale === "nl") return nl_kits_pin_error(inputs)
	if (locale === "pl") return pl_kits_pin_error(inputs)
	if (locale === "pt") return pt_kits_pin_error(inputs)
	if (locale === "ru") return ru_kits_pin_error(inputs)
	if (locale === "sv") return sv_kits_pin_error(inputs)
	if (locale === "tr") return tr_kits_pin_error(inputs)
	if (locale === "zh") return zh_kits_pin_error(inputs)
	if (locale === "ja") return ja_kits_pin_error(inputs)
	return en_kits_pin_error(inputs)
});
