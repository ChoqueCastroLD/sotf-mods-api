/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ files: NonNullable<unknown>, size: NonNullable<unknown>, downloads: NonNullable<unknown> }} Bundles_MetaInputs */

const en_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} files · ${i?.size} · ${i?.downloads} downloads`)
};

const es_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} archivos · ${i?.size} · ${i?.downloads} descargas`)
};

const de_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} Dateien · ${i?.size} · ${i?.downloads} Downloads`)
};

const fr_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} fichiers · ${i?.size} · ${i?.downloads} téléchargements`)
};

const it_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} file · ${i?.size} · ${i?.downloads} download`)
};

const nl_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} bestanden · ${i?.size} · ${i?.downloads} downloads`)
};

const pl_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} plików · ${i?.size} · pobrań: ${i?.downloads}`)
};

const pt_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} ficheiros · ${i?.size} · ${i?.downloads} transferências`)
};

const ru_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`файлов ${i?.files} · ${i?.size} · загрузок ${i?.downloads}`)
};

const sv_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} filer · ${i?.size} · ${i?.downloads} nedladdningar`)
};

const tr_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} dosya · ${i?.size} · ${i?.downloads} indirme`)
};

const zh_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} 个文件 · ${i?.size} · ${i?.downloads} 次下载`)
};

const ja_bundles_meta = /** @type {(inputs: Bundles_MetaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.files} ファイル · ${i?.size} · ${i?.downloads} ダウンロード`)
};

/**
* | output |
* | --- |
* | "{files} files · {size} · {downloads} downloads" |
*
* @param {Bundles_MetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_meta = /** @type {((inputs: Bundles_MetaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_MetaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_meta(inputs)
	if (locale === "de") return de_bundles_meta(inputs)
	if (locale === "fr") return fr_bundles_meta(inputs)
	if (locale === "it") return it_bundles_meta(inputs)
	if (locale === "nl") return nl_bundles_meta(inputs)
	if (locale === "pl") return pl_bundles_meta(inputs)
	if (locale === "pt") return pt_bundles_meta(inputs)
	if (locale === "ru") return ru_bundles_meta(inputs)
	if (locale === "sv") return sv_bundles_meta(inputs)
	if (locale === "tr") return tr_bundles_meta(inputs)
	if (locale === "zh") return zh_bundles_meta(inputs)
	if (locale === "ja") return ja_bundles_meta(inputs)
	return en_bundles_meta(inputs)
});
