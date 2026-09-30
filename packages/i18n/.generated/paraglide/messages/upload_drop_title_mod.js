/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drop_Title_ModInputs */

const en_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop your .zip here`)
};

const es_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta tu .zip aquí`)
};

const de_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zieh dein .zip hierher`)
};

const fr_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez votre .zip ici`)
};

const it_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina qui il tuo .zip`)
};

const nl_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep je .zip hierheen`)
};

const pl_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść tutaj plik .zip`)
};

const pt_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solte seu .zip aqui`)
};

const ru_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите сюда .zip`)
};

const sv_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp din .zip här`)
};

const tr_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.zip dosyanı buraya bırak`)
};

const zh_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把 .zip 拖到这里`)
};

const ja_upload_drop_title_mod = /** @type {(inputs: Upload_Drop_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここに .zip をドロップ`)
};

/**
* | output |
* | --- |
* | "Drop your .zip here" |
*
* @param {Upload_Drop_Title_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drop_title_mod = /** @type {((inputs?: Upload_Drop_Title_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drop_Title_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drop_title_mod(inputs)
	if (locale === "de") return de_upload_drop_title_mod(inputs)
	if (locale === "fr") return fr_upload_drop_title_mod(inputs)
	if (locale === "it") return it_upload_drop_title_mod(inputs)
	if (locale === "nl") return nl_upload_drop_title_mod(inputs)
	if (locale === "pl") return pl_upload_drop_title_mod(inputs)
	if (locale === "pt") return pt_upload_drop_title_mod(inputs)
	if (locale === "ru") return ru_upload_drop_title_mod(inputs)
	if (locale === "sv") return sv_upload_drop_title_mod(inputs)
	if (locale === "tr") return tr_upload_drop_title_mod(inputs)
	if (locale === "zh") return zh_upload_drop_title_mod(inputs)
	if (locale === "ja") return ja_upload_drop_title_mod(inputs)
	return en_upload_drop_title_mod(inputs)
});
