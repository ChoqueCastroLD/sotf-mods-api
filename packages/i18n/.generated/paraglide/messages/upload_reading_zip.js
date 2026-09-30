/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Reading_ZipInputs */

const en_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opening the zip in your browser…`)
};

const es_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abriendo el zip en tu navegador…`)
};

const de_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip wird in deinem Browser geöffnet…`)
};

const fr_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouverture du zip dans votre navigateur…`)
};

const it_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apertura dello zip nel browser…`)
};

const nl_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip openen in je browser…`)
};

const pl_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwieranie pliku zip w przeglądarce…`)
};

const pt_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrindo o zip no seu navegador…`)
};

const ru_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открываем zip в браузере…`)
};

const sv_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppnar zip-filen i din webbläsare…`)
};

const tr_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip tarayıcında açılıyor…`)
};

const zh_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在浏览器中打开 zip…`)
};

const ja_upload_reading_zip = /** @type {(inputs: Upload_Reading_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ブラウザで zip を開いています…`)
};

/**
* | output |
* | --- |
* | "Opening the zip in your browser…" |
*
* @param {Upload_Reading_ZipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_reading_zip = /** @type {((inputs?: Upload_Reading_ZipInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Reading_ZipInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_reading_zip(inputs)
	if (locale === "de") return de_upload_reading_zip(inputs)
	if (locale === "fr") return fr_upload_reading_zip(inputs)
	if (locale === "it") return it_upload_reading_zip(inputs)
	if (locale === "nl") return nl_upload_reading_zip(inputs)
	if (locale === "pl") return pl_upload_reading_zip(inputs)
	if (locale === "pt") return pt_upload_reading_zip(inputs)
	if (locale === "ru") return ru_upload_reading_zip(inputs)
	if (locale === "sv") return sv_upload_reading_zip(inputs)
	if (locale === "tr") return tr_upload_reading_zip(inputs)
	if (locale === "zh") return zh_upload_reading_zip(inputs)
	if (locale === "ja") return ja_upload_reading_zip(inputs)
	return en_upload_reading_zip(inputs)
});
