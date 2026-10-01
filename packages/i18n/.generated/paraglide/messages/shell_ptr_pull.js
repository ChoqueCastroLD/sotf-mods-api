/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Ptr_PullInputs */

const en_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pull to refresh`)
};

const es_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desliza para actualizar`)
};

const de_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Aktualisieren ziehen`)
};

const fr_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tirez pour actualiser`)
};

const it_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina per aggiornare`)
};

const nl_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trek om te vernieuwen`)
};

const pl_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pociągnij, aby odświeżyć`)
};

const pt_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puxe para atualizar`)
};

const ru_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Потяните, чтобы обновить`)
};

const sv_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra för att uppdatera`)
};

const tr_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yenilemek için çek`)
};

const zh_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下拉刷新`)
};

const ja_shell_ptr_pull = /** @type {(inputs: Shell_Ptr_PullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`引っ張って更新`)
};

/**
* | output |
* | --- |
* | "Pull to refresh" |
*
* @param {Shell_Ptr_PullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_ptr_pull = /** @type {((inputs?: Shell_Ptr_PullInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Ptr_PullInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_ptr_pull(inputs)
	if (locale === "de") return de_shell_ptr_pull(inputs)
	if (locale === "fr") return fr_shell_ptr_pull(inputs)
	if (locale === "it") return it_shell_ptr_pull(inputs)
	if (locale === "nl") return nl_shell_ptr_pull(inputs)
	if (locale === "pl") return pl_shell_ptr_pull(inputs)
	if (locale === "pt") return pt_shell_ptr_pull(inputs)
	if (locale === "ru") return ru_shell_ptr_pull(inputs)
	if (locale === "sv") return sv_shell_ptr_pull(inputs)
	if (locale === "tr") return tr_shell_ptr_pull(inputs)
	if (locale === "zh") return zh_shell_ptr_pull(inputs)
	if (locale === "ja") return ja_shell_ptr_pull(inputs)
	return en_shell_ptr_pull(inputs)
});
