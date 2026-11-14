/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Hero_TitleInputs */

const en_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The new way to install Sons of the Forest mods`)
};

const es_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La nueva forma de instalar mods de Sons of the Forest`)
};

const de_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die neue Art, Mods für Sons of the Forest zu installieren`)
};

const fr_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La nouvelle façon d’installer des mods pour Sons of the Forest`)
};

const it_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il nuovo modo di installare mod per Sons of the Forest`)
};

const nl_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De nieuwe manier om mods voor Sons of the Forest te installeren`)
};

const pl_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy sposób instalowania modów do Sons of the Forest`)
};

const pt_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O novo jeito de instalar mods de Sons of the Forest`)
};

const ru_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый способ устанавливать моды для Sons of the Forest`)
};

const sv_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det nya sättet att installera moddar till Sons of the Forest`)
};

const tr_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest modlarını kurmanın yeni yolu`)
};

const zh_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装《森林之子》模组的全新方式`)
};

const ja_manager_hero_title = /** @type {(inputs: Manager_Hero_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の Mod を入れる新しい方法`)
};

/**
* | output |
* | --- |
* | "The new way to install Sons of the Forest mods" |
*
* @param {Manager_Hero_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_hero_title = /** @type {((inputs?: Manager_Hero_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Hero_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_hero_title(inputs)
	if (locale === "de") return de_manager_hero_title(inputs)
	if (locale === "fr") return fr_manager_hero_title(inputs)
	if (locale === "it") return it_manager_hero_title(inputs)
	if (locale === "nl") return nl_manager_hero_title(inputs)
	if (locale === "pl") return pl_manager_hero_title(inputs)
	if (locale === "pt") return pt_manager_hero_title(inputs)
	if (locale === "ru") return ru_manager_hero_title(inputs)
	if (locale === "sv") return sv_manager_hero_title(inputs)
	if (locale === "tr") return tr_manager_hero_title(inputs)
	if (locale === "zh") return zh_manager_hero_title(inputs)
	if (locale === "ja") return ja_manager_hero_title(inputs)
	return en_manager_hero_title(inputs)
});
