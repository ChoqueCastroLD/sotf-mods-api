/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Ptr_LoadingInputs */

const en_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refreshing…`)
};

const es_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizando…`)
};

const de_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird aktualisiert…`)
};

const fr_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualisation…`)
};

const it_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamento…`)
};

const nl_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vernieuwen…`)
};

const pl_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odświeżanie…`)
};

const pt_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizando…`)
};

const ru_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновление…`)
};

const sv_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdaterar…`)
};

const tr_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yenileniyor…`)
};

const zh_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在刷新…`)
};

const ja_shell_ptr_loading = /** @type {(inputs: Shell_Ptr_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新中…`)
};

/**
* | output |
* | --- |
* | "Refreshing…" |
*
* @param {Shell_Ptr_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_ptr_loading = /** @type {((inputs?: Shell_Ptr_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Ptr_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_ptr_loading(inputs)
	if (locale === "de") return de_shell_ptr_loading(inputs)
	if (locale === "fr") return fr_shell_ptr_loading(inputs)
	if (locale === "it") return it_shell_ptr_loading(inputs)
	if (locale === "nl") return nl_shell_ptr_loading(inputs)
	if (locale === "pl") return pl_shell_ptr_loading(inputs)
	if (locale === "pt") return pt_shell_ptr_loading(inputs)
	if (locale === "ru") return ru_shell_ptr_loading(inputs)
	if (locale === "sv") return sv_shell_ptr_loading(inputs)
	if (locale === "tr") return tr_shell_ptr_loading(inputs)
	if (locale === "zh") return zh_shell_ptr_loading(inputs)
	if (locale === "ja") return ja_shell_ptr_loading(inputs)
	return en_shell_ptr_loading(inputs)
});
