/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Switch_To_FreeInputs */

const en_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not a RedLoader mod? Upload it anyway`)
};

const es_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿No es un mod de RedLoader? Subirlo igualmente`)
};

const de_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine RedLoader-Mod? Trotzdem hochladen`)
};

const fr_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas un mod RedLoader ? L’envoyer quand même`)
};

const it_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è una mod RedLoader? Caricala comunque`)
};

const nl_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen RedLoader-mod? Toch uploaden`)
};

const pl_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To nie mod do RedLoadera? Prześlij mimo to`)
};

const pt_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não é um mod do RedLoader? Enviar mesmo assim`)
};

const ru_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это не мод для RedLoader? Загрузить всё равно`)
};

const sv_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte en RedLoader-modd? Ladda upp ändå`)
};

const tr_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader modu değil mi? Yine de yükle`)
};

const zh_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不是 RedLoader 模组？仍然上传`)
};

const ja_upload_switch_to_free = /** @type {(inputs: Upload_Switch_To_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader用ではない？ そのままアップロード`)
};

/**
* | output |
* | --- |
* | "Not a RedLoader mod? Upload it anyway" |
*
* @param {Upload_Switch_To_FreeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_switch_to_free = /** @type {((inputs?: Upload_Switch_To_FreeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Switch_To_FreeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_switch_to_free(inputs)
	if (locale === "de") return de_upload_switch_to_free(inputs)
	if (locale === "fr") return fr_upload_switch_to_free(inputs)
	if (locale === "it") return it_upload_switch_to_free(inputs)
	if (locale === "nl") return nl_upload_switch_to_free(inputs)
	if (locale === "pl") return pl_upload_switch_to_free(inputs)
	if (locale === "pt") return pt_upload_switch_to_free(inputs)
	if (locale === "ru") return ru_upload_switch_to_free(inputs)
	if (locale === "sv") return sv_upload_switch_to_free(inputs)
	if (locale === "tr") return tr_upload_switch_to_free(inputs)
	if (locale === "zh") return zh_upload_switch_to_free(inputs)
	if (locale === "ja") return ja_upload_switch_to_free(inputs)
	return en_upload_switch_to_free(inputs)
});
