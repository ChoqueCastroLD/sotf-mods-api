/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Drop_HintInputs */

const en_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop a .log, .txt, .gz or .zip file anywhere in this box`)
};

const es_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta un archivo .log, .txt, .gz o .zip en cualquier parte de este cuadro`)
};

const de_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziehe eine .log-, .txt-, .gz- oder .zip-Datei irgendwo in dieses Feld`)
};

const fr_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez un fichier .log, .txt, .gz ou .zip n’importe où dans ce cadre`)
};

const it_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina un file .log, .txt, .gz o .zip in un punto qualsiasi di questo riquadro`)
};

const nl_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep een .log-, .txt-, .gz- of .zip-bestand ergens in dit vak`)
};

const pl_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść plik .log, .txt, .gz lub .zip w dowolnym miejscu tego pola`)
};

const pt_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Largue um ficheiro .log, .txt, .gz ou .zip em qualquer ponto desta caixa`)
};

const ru_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите файл .log, .txt, .gz или .zip в любое место этой области`)
};

const sv_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp en .log-, .txt-, .gz- eller .zip-fil var som helst i rutan`)
};

const tr_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir .log, .txt, .gz veya .zip dosyasını bu kutunun herhangi bir yerine bırakın`)
};

const zh_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将 .log、.txt、.gz 或 .zip 文件拖到此框内任意位置`)
};

const ja_logs_drop_hint = /** @type {(inputs: Logs_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.log、.txt、.gz、.zip ファイルをこの枠内のどこかにドロップ`)
};

/**
* | output |
* | --- |
* | "Drop a .log, .txt, .gz or .zip file anywhere in this box" |
*
* @param {Logs_Drop_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_drop_hint = /** @type {((inputs?: Logs_Drop_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Drop_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_drop_hint(inputs)
	if (locale === "de") return de_logs_drop_hint(inputs)
	if (locale === "fr") return fr_logs_drop_hint(inputs)
	if (locale === "it") return it_logs_drop_hint(inputs)
	if (locale === "nl") return nl_logs_drop_hint(inputs)
	if (locale === "pl") return pl_logs_drop_hint(inputs)
	if (locale === "pt") return pt_logs_drop_hint(inputs)
	if (locale === "ru") return ru_logs_drop_hint(inputs)
	if (locale === "sv") return sv_logs_drop_hint(inputs)
	if (locale === "tr") return tr_logs_drop_hint(inputs)
	if (locale === "zh") return zh_logs_drop_hint(inputs)
	if (locale === "ja") return ja_logs_drop_hint(inputs)
	return en_logs_drop_hint(inputs)
});
