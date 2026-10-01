/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Drop_ActiveInputs */

const en_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop the file to load it`)
};

const es_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta el archivo para cargarlo`)
};

const de_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei loslassen, um sie zu laden`)
};

const fr_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez le fichier pour le charger`)
};

const it_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rilascia il file per caricarlo`)
};

const nl_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat los om het bestand te laden`)
};

const pl_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść plik, aby go wczytać`)
};

const pt_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Largue o ficheiro para o carregar`)
};

const ru_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отпустите файл, чтобы загрузить его`)
};

const sv_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp filen för att läsa in den`)
};

const tr_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yüklemek için dosyayı bırakın`)
};

const zh_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`松开以载入文件`)
};

const ja_logs_drop_active = /** @type {(inputs: Logs_Drop_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ドロップしてファイルを読み込み`)
};

/**
* | output |
* | --- |
* | "Drop the file to load it" |
*
* @param {Logs_Drop_ActiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_drop_active = /** @type {((inputs?: Logs_Drop_ActiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Drop_ActiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_drop_active(inputs)
	if (locale === "de") return de_logs_drop_active(inputs)
	if (locale === "fr") return fr_logs_drop_active(inputs)
	if (locale === "it") return it_logs_drop_active(inputs)
	if (locale === "nl") return nl_logs_drop_active(inputs)
	if (locale === "pl") return pl_logs_drop_active(inputs)
	if (locale === "pt") return pt_logs_drop_active(inputs)
	if (locale === "ru") return ru_logs_drop_active(inputs)
	if (locale === "sv") return sv_logs_drop_active(inputs)
	if (locale === "tr") return tr_logs_drop_active(inputs)
	if (locale === "zh") return zh_logs_drop_active(inputs)
	if (locale === "ja") return ja_logs_drop_active(inputs)
	return en_logs_drop_active(inputs)
});
