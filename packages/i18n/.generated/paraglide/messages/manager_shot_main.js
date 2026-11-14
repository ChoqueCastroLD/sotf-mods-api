/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Shot_MainInputs */

const en_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager showing the mods of SOTF Mods`)
};

const es_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager mostrando los mods de SOTF Mods`)
};

const de_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager mit den Mods von SOTF Mods`)
};

const fr_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager affichant les mods de SOTF Mods`)
};

const it_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager con le mod di SOTF Mods`)
};

const nl_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager met de mods van SOTF Mods`)
};

const pl_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager z modami z SOTF Mods`)
};

const pt_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager mostrando os mods do SOTF Mods`)
};

const ru_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager с модами SOTF Mods`)
};

const sv_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager med moddarna från SOTF Mods`)
};

const tr_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods modlarını gösteren SotF Mods Manager`)
};

const zh_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager 显示 SOTF Mods 上的模组`)
};

const ja_manager_shot_main = /** @type {(inputs: Manager_Shot_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods の Mod を表示した SotF Mods Manager`)
};

/**
* | output |
* | --- |
* | "SotF Mods Manager showing the mods of SOTF Mods" |
*
* @param {Manager_Shot_MainInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_shot_main = /** @type {((inputs?: Manager_Shot_MainInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Shot_MainInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_shot_main(inputs)
	if (locale === "de") return de_manager_shot_main(inputs)
	if (locale === "fr") return fr_manager_shot_main(inputs)
	if (locale === "it") return it_manager_shot_main(inputs)
	if (locale === "nl") return nl_manager_shot_main(inputs)
	if (locale === "pl") return pl_manager_shot_main(inputs)
	if (locale === "pt") return pt_manager_shot_main(inputs)
	if (locale === "ru") return ru_manager_shot_main(inputs)
	if (locale === "sv") return sv_manager_shot_main(inputs)
	if (locale === "tr") return tr_manager_shot_main(inputs)
	if (locale === "zh") return zh_manager_shot_main(inputs)
	if (locale === "ja") return ja_manager_shot_main(inputs)
	return en_manager_shot_main(inputs)
});
