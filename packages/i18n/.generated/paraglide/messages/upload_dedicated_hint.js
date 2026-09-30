/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dedicated_HintInputs */

const en_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Does it work on a dedicated server?`)
};

const es_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Funciona en un servidor dedicado?`)
};

const de_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktioniert er auf einem dedizierten Server?`)
};

const fr_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne-t-il sur un serveur dédié ?`)
};

const it_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona su un server dedicato?`)
};

const nl_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt hij op een dedicated server?`)
};

const pl_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czy działa na serwerze dedykowanym?`)
};

const pt_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona em servidor dedicado?`)
};

const ru_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает ли он на выделенном сервере?`)
};

const sv_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar den på en dedikerad server?`)
};

const tr_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel sunucuda çalışıyor mu?`)
};

const zh_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它能在专用服务器上运行吗？`)
};

const ja_upload_dedicated_hint = /** @type {(inputs: Upload_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバーで動作しますか？`)
};

/**
* | output |
* | --- |
* | "Does it work on a dedicated server?" |
*
* @param {Upload_Dedicated_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dedicated_hint = /** @type {((inputs?: Upload_Dedicated_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dedicated_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dedicated_hint(inputs)
	if (locale === "de") return de_upload_dedicated_hint(inputs)
	if (locale === "fr") return fr_upload_dedicated_hint(inputs)
	if (locale === "it") return it_upload_dedicated_hint(inputs)
	if (locale === "nl") return nl_upload_dedicated_hint(inputs)
	if (locale === "pl") return pl_upload_dedicated_hint(inputs)
	if (locale === "pt") return pt_upload_dedicated_hint(inputs)
	if (locale === "ru") return ru_upload_dedicated_hint(inputs)
	if (locale === "sv") return sv_upload_dedicated_hint(inputs)
	if (locale === "tr") return tr_upload_dedicated_hint(inputs)
	if (locale === "zh") return zh_upload_dedicated_hint(inputs)
	if (locale === "ja") return ja_upload_dedicated_hint(inputs)
	return en_upload_dedicated_hint(inputs)
});
