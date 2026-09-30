/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_No_VersionsInputs */

const en_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There is no available version to mark.`)
};

const es_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay ninguna versión disponible que marcar.`)
};

const de_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es gibt keine verfügbare Version zum Markieren.`)
};

const fr_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune version disponible à marquer.`)
};

const it_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non c’è nessuna versione disponibile da segnare.`)
};

const nl_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is geen beschikbare versie om te markeren.`)
};

const pl_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak dostępnej wersji do oznaczenia.`)
};

const pt_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não há nenhuma versão disponível para marcar.`)
};

const ru_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет доступной версии для отметки.`)
};

const sv_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns ingen tillgänglig version att markera.`)
};

const tr_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşaretlenecek kullanılabilir sürüm yok.`)
};

const zh_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有可标记的可用版本。`)
};

const ja_basecamp_compat_no_versions = /** @type {(inputs: Basecamp_Compat_No_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`印を付けられる利用可能なバージョンがありません。`)
};

/**
* | output |
* | --- |
* | "There is no available version to mark." |
*
* @param {Basecamp_Compat_No_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_no_versions = /** @type {((inputs?: Basecamp_Compat_No_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_No_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_no_versions(inputs)
	if (locale === "de") return de_basecamp_compat_no_versions(inputs)
	if (locale === "fr") return fr_basecamp_compat_no_versions(inputs)
	if (locale === "it") return it_basecamp_compat_no_versions(inputs)
	if (locale === "nl") return nl_basecamp_compat_no_versions(inputs)
	if (locale === "pl") return pl_basecamp_compat_no_versions(inputs)
	if (locale === "pt") return pt_basecamp_compat_no_versions(inputs)
	if (locale === "ru") return ru_basecamp_compat_no_versions(inputs)
	if (locale === "sv") return sv_basecamp_compat_no_versions(inputs)
	if (locale === "tr") return tr_basecamp_compat_no_versions(inputs)
	if (locale === "zh") return zh_basecamp_compat_no_versions(inputs)
	if (locale === "ja") return ja_basecamp_compat_no_versions(inputs)
	return en_basecamp_compat_no_versions(inputs)
});
