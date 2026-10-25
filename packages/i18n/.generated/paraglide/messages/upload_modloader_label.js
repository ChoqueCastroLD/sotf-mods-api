/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Modloader_LabelInputs */

const en_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod loader`)
};

const es_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargador de mods`)
};

const de_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Loader`)
};

const fr_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargeur de mods`)
};

const it_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod loader`)
};

const nl_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modloader`)
};

const pl_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader modów`)
};

const pt_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregador de mods`)
};

const ru_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузчик модов`)
};

const sv_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modladdare`)
};

const tr_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod yükleyici`)
};

const zh_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组加载器`)
};

const ja_upload_modloader_label = /** @type {(inputs: Upload_Modloader_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODローダー`)
};

/**
* | output |
* | --- |
* | "Mod loader" |
*
* @param {Upload_Modloader_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_modloader_label = /** @type {((inputs?: Upload_Modloader_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Modloader_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_modloader_label(inputs)
	if (locale === "de") return de_upload_modloader_label(inputs)
	if (locale === "fr") return fr_upload_modloader_label(inputs)
	if (locale === "it") return it_upload_modloader_label(inputs)
	if (locale === "nl") return nl_upload_modloader_label(inputs)
	if (locale === "pl") return pl_upload_modloader_label(inputs)
	if (locale === "pt") return pt_upload_modloader_label(inputs)
	if (locale === "ru") return ru_upload_modloader_label(inputs)
	if (locale === "sv") return sv_upload_modloader_label(inputs)
	if (locale === "tr") return tr_upload_modloader_label(inputs)
	if (locale === "zh") return zh_upload_modloader_label(inputs)
	if (locale === "ja") return ja_upload_modloader_label(inputs)
	return en_upload_modloader_label(inputs)
});
