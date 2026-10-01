/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Ptr_ReleaseInputs */

const en_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release to refresh`)
};

const es_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta para actualizar`)
};

const de_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loslassen zum Aktualisieren`)
};

const fr_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relâchez pour actualiser`)
};

const it_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rilascia per aggiornare`)
};

const nl_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat los om te vernieuwen`)
};

const pl_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puść, aby odświeżyć`)
};

const pt_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solte para atualizar`)
};

const ru_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отпустите, чтобы обновить`)
};

const sv_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp för att uppdatera`)
};

const tr_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yenilemek için bırak`)
};

const zh_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`松开刷新`)
};

const ja_shell_ptr_release = /** @type {(inputs: Shell_Ptr_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`離して更新`)
};

/**
* | output |
* | --- |
* | "Release to refresh" |
*
* @param {Shell_Ptr_ReleaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_ptr_release = /** @type {((inputs?: Shell_Ptr_ReleaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Ptr_ReleaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_ptr_release(inputs)
	if (locale === "de") return de_shell_ptr_release(inputs)
	if (locale === "fr") return fr_shell_ptr_release(inputs)
	if (locale === "it") return it_shell_ptr_release(inputs)
	if (locale === "nl") return nl_shell_ptr_release(inputs)
	if (locale === "pl") return pl_shell_ptr_release(inputs)
	if (locale === "pt") return pt_shell_ptr_release(inputs)
	if (locale === "ru") return ru_shell_ptr_release(inputs)
	if (locale === "sv") return sv_shell_ptr_release(inputs)
	if (locale === "tr") return tr_shell_ptr_release(inputs)
	if (locale === "zh") return zh_shell_ptr_release(inputs)
	if (locale === "ja") return ja_shell_ptr_release(inputs)
	return en_shell_ptr_release(inputs)
});
