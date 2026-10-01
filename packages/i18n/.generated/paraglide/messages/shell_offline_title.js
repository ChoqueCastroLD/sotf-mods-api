/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_TitleInputs */

const en_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’re off the grid`)
};

const es_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estás fuera de cobertura`)
};

const de_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bist außer Reichweite`)
};

const fr_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous êtes hors de portée`)
};

const it_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei fuori portata`)
};

const nl_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bent buiten bereik`)
};

const pl_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jesteś poza zasięgiem`)
};

const pt_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você está fora de alcance`)
};

const ru_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы вне зоны доступа`)
};

const sv_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du är utom räckhåll`)
};

const tr_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapsama alanı dışındasın`)
};

const zh_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已失去信号`)
};

const ja_shell_offline_title = /** @type {(inputs: Shell_Offline_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`電波の届かない場所です`)
};

/**
* | output |
* | --- |
* | "You’re off the grid" |
*
* @param {Shell_Offline_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_title = /** @type {((inputs?: Shell_Offline_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_title(inputs)
	if (locale === "de") return de_shell_offline_title(inputs)
	if (locale === "fr") return fr_shell_offline_title(inputs)
	if (locale === "it") return it_shell_offline_title(inputs)
	if (locale === "nl") return nl_shell_offline_title(inputs)
	if (locale === "pl") return pl_shell_offline_title(inputs)
	if (locale === "pt") return pt_shell_offline_title(inputs)
	if (locale === "ru") return ru_shell_offline_title(inputs)
	if (locale === "sv") return sv_shell_offline_title(inputs)
	if (locale === "tr") return tr_shell_offline_title(inputs)
	if (locale === "zh") return zh_shell_offline_title(inputs)
	if (locale === "ja") return ja_shell_offline_title(inputs)
	return en_shell_offline_title(inputs)
});
