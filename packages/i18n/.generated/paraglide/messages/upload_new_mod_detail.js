/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_New_Mod_DetailInputs */

const en_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A RedLoader .zip with its manifest.json. Six short steps.`)
};

const es_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un .zip de RedLoader con su manifest.json. Seis pasos cortos.`)
};

const de_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein RedLoader-.zip mit seiner manifest.json. Sechs kurze Schritte.`)
};

const fr_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un .zip RedLoader avec son manifest.json. Six étapes courtes.`)
};

const it_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uno .zip di RedLoader con il suo manifest.json. Sei brevi passaggi.`)
};

const nl_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een RedLoader-.zip met zijn manifest.json. Zes korte stappen.`)
};

const pl_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik .zip dla RedLoadera z manifest.json. Sześć krótkich kroków.`)
};

const pt_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um .zip do RedLoader com o manifest.json. Seis etapas curtas.`)
};

const ru_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.zip для RedLoader с manifest.json. Шесть коротких шагов.`)
};

const sv_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En RedLoader-.zip med sin manifest.json. Sex korta steg.`)
};

const tr_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json içeren bir RedLoader .zip dosyası. Altı kısa adım.`)
};

const zh_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`带 manifest.json 的 RedLoader .zip。六个简短步骤。`)
};

const ja_upload_new_mod_detail = /** @type {(inputs: Upload_New_Mod_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json を含む RedLoader 用 .zip。短い6ステップです。`)
};

/**
* | output |
* | --- |
* | "A RedLoader .zip with its manifest.json. Six short steps." |
*
* @param {Upload_New_Mod_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_mod_detail = /** @type {((inputs?: Upload_New_Mod_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_Mod_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_mod_detail(inputs)
	if (locale === "de") return de_upload_new_mod_detail(inputs)
	if (locale === "fr") return fr_upload_new_mod_detail(inputs)
	if (locale === "it") return it_upload_new_mod_detail(inputs)
	if (locale === "nl") return nl_upload_new_mod_detail(inputs)
	if (locale === "pl") return pl_upload_new_mod_detail(inputs)
	if (locale === "pt") return pt_upload_new_mod_detail(inputs)
	if (locale === "ru") return ru_upload_new_mod_detail(inputs)
	if (locale === "sv") return sv_upload_new_mod_detail(inputs)
	if (locale === "tr") return tr_upload_new_mod_detail(inputs)
	if (locale === "zh") return zh_upload_new_mod_detail(inputs)
	if (locale === "ja") return ja_upload_new_mod_detail(inputs)
	return en_upload_new_mod_detail(inputs)
});
