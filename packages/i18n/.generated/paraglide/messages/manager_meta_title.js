/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Meta_TitleInputs */

const en_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager: one-click mod manager for Sons of the Forest`)
};

const es_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager: gestor de mods con un clic para Sons of the Forest`)
};

const de_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager: Mod-Manager mit einem Klick für Sons of the Forest`)
};

const fr_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager : gestionnaire de mods en un clic pour Sons of the Forest`)
};

const it_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager: gestore di mod con un clic per Sons of the Forest`)
};

const nl_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager: modmanager met één klik voor Sons of the Forest`)
};

const pl_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager: menedżer modów do Sons of the Forest na jedno kliknięcie`)
};

const pt_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager: gerenciador de mods com um clique para Sons of the Forest`)
};

const ru_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager: менеджер модов в один клик для Sons of the Forest`)
};

const sv_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager: moddhanterare med ett klick för Sons of the Forest`)
};

const tr_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager: Sons of the Forest için tek tıklık mod yöneticisi`)
};

const zh_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager：《森林之子》一键模组管理器`)
};

const ja_manager_meta_title = /** @type {(inputs: Manager_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager：Sons of the Forest のワンクリック Mod マネージャー`)
};

/**
* | output |
* | --- |
* | "SotF Mods Manager: one-click mod manager for Sons of the Forest" |
*
* @param {Manager_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_meta_title = /** @type {((inputs?: Manager_Meta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Meta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_meta_title(inputs)
	if (locale === "de") return de_manager_meta_title(inputs)
	if (locale === "fr") return fr_manager_meta_title(inputs)
	if (locale === "it") return it_manager_meta_title(inputs)
	if (locale === "nl") return nl_manager_meta_title(inputs)
	if (locale === "pl") return pl_manager_meta_title(inputs)
	if (locale === "pt") return pt_manager_meta_title(inputs)
	if (locale === "ru") return ru_manager_meta_title(inputs)
	if (locale === "sv") return sv_manager_meta_title(inputs)
	if (locale === "tr") return tr_manager_meta_title(inputs)
	if (locale === "zh") return zh_manager_meta_title(inputs)
	if (locale === "ja") return ja_manager_meta_title(inputs)
	return en_manager_meta_title(inputs)
});
