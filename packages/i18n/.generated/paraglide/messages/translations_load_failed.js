/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Load_FailedInputs */

const en_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not load the translations.`)
};

const es_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar las traducciones.`)
};

const de_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Übersetzungen konnten nicht geladen werden.`)
};

const fr_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les traductions.`)
};

const it_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare le traduzioni.`)
};

const nl_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De vertalingen konden niet worden geladen.`)
};

const pl_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać tłumaczeń.`)
};

const pt_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar as traduções.`)
};

const ru_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить переводы.`)
};

const sv_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att läsa in översättningarna.`)
};

const tr_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çeviriler yüklenemedi.`)
};

const zh_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载译文。`)
};

const ja_translations_load_failed = /** @type {(inputs: Translations_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳を読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "Could not load the translations." |
*
* @param {Translations_Load_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_load_failed = /** @type {((inputs?: Translations_Load_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Load_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_load_failed(inputs)
	if (locale === "de") return de_translations_load_failed(inputs)
	if (locale === "fr") return fr_translations_load_failed(inputs)
	if (locale === "it") return it_translations_load_failed(inputs)
	if (locale === "nl") return nl_translations_load_failed(inputs)
	if (locale === "pl") return pl_translations_load_failed(inputs)
	if (locale === "pt") return pt_translations_load_failed(inputs)
	if (locale === "ru") return ru_translations_load_failed(inputs)
	if (locale === "sv") return sv_translations_load_failed(inputs)
	if (locale === "tr") return tr_translations_load_failed(inputs)
	if (locale === "zh") return zh_translations_load_failed(inputs)
	if (locale === "ja") return ja_translations_load_failed(inputs)
	return en_translations_load_failed(inputs)
});
