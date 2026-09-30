/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Manifest_MissingInputs */

const en_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No manifest.json was found (at most two folders deep).`)
};

const es_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontró manifest.json (como mucho a dos carpetas de profundidad).`)
};

const de_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine manifest.json gefunden (höchstens zwei Ordner tief).`)
};

const fr_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun manifest.json trouvé (deux dossiers de profondeur au plus).`)
};

const it_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun manifest.json trovato (al massimo due cartelle di profondità).`)
};

const nl_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen manifest.json gevonden (hoogstens twee mappen diep).`)
};

const pl_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono manifest.json (najwyżej dwa foldery w głąb).`)
};

const pt_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum manifest.json encontrado (no máximo duas pastas de profundidade).`)
};

const ru_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json не найден (не глубже двух папок).`)
};

const sv_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen manifest.json hittades (högst två mappar ner).`)
};

const tr_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json bulunamadı (en fazla iki klasör derinlikte).`)
};

const zh_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到 manifest.json（最多两层文件夹深）。`)
};

const ja_upload_flag_manifest_missing = /** @type {(inputs: Upload_Flag_Manifest_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json が見つかりません（フォルダー2階層まで）。`)
};

/**
* | output |
* | --- |
* | "No manifest.json was found (at most two folders deep)." |
*
* @param {Upload_Flag_Manifest_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_manifest_missing = /** @type {((inputs?: Upload_Flag_Manifest_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Manifest_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_manifest_missing(inputs)
	if (locale === "de") return de_upload_flag_manifest_missing(inputs)
	if (locale === "fr") return fr_upload_flag_manifest_missing(inputs)
	if (locale === "it") return it_upload_flag_manifest_missing(inputs)
	if (locale === "nl") return nl_upload_flag_manifest_missing(inputs)
	if (locale === "pl") return pl_upload_flag_manifest_missing(inputs)
	if (locale === "pt") return pt_upload_flag_manifest_missing(inputs)
	if (locale === "ru") return ru_upload_flag_manifest_missing(inputs)
	if (locale === "sv") return sv_upload_flag_manifest_missing(inputs)
	if (locale === "tr") return tr_upload_flag_manifest_missing(inputs)
	if (locale === "zh") return zh_upload_flag_manifest_missing(inputs)
	if (locale === "ja") return ja_upload_flag_manifest_missing(inputs)
	return en_upload_flag_manifest_missing(inputs)
});
