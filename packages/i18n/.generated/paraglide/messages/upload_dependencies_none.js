/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependencies_NoneInputs */

const en_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No dependencies.`)
};

const es_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin dependencias.`)
};

const de_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Abhängigkeiten.`)
};

const fr_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune dépendance.`)
};

const it_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna dipendenza.`)
};

const nl_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen afhankelijkheden.`)
};

const pl_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak zależności.`)
};

const pt_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem dependências.`)
};

const ru_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимостей нет.`)
};

const sv_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga beroenden.`)
};

const tr_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılık yok.`)
};

const zh_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有依赖。`)
};

const ja_upload_dependencies_none = /** @type {(inputs: Upload_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存関係はありません。`)
};

/**
* | output |
* | --- |
* | "No dependencies." |
*
* @param {Upload_Dependencies_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependencies_none = /** @type {((inputs?: Upload_Dependencies_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependencies_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependencies_none(inputs)
	if (locale === "de") return de_upload_dependencies_none(inputs)
	if (locale === "fr") return fr_upload_dependencies_none(inputs)
	if (locale === "it") return it_upload_dependencies_none(inputs)
	if (locale === "nl") return nl_upload_dependencies_none(inputs)
	if (locale === "pl") return pl_upload_dependencies_none(inputs)
	if (locale === "pt") return pt_upload_dependencies_none(inputs)
	if (locale === "ru") return ru_upload_dependencies_none(inputs)
	if (locale === "sv") return sv_upload_dependencies_none(inputs)
	if (locale === "tr") return tr_upload_dependencies_none(inputs)
	if (locale === "zh") return zh_upload_dependencies_none(inputs)
	if (locale === "ja") return ja_upload_dependencies_none(inputs)
	return en_upload_dependencies_none(inputs)
});
