/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_TitleInputs */

const en_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install Sons of the Forest mods with one click`)
};

const es_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala mods de Sons of the Forest con un clic`)
};

const de_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods für Sons of the Forest mit einem Klick installieren`)
};

const fr_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installez des mods Sons of the Forest en un clic`)
};

const it_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa mod per Sons of the Forest con un clic`)
};

const nl_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer mods voor Sons of the Forest met één klik`)
};

const pl_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instaluj mody do Sons of the Forest jednym kliknięciem`)
};

const pt_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale mods de Sons of the Forest com um clique`)
};

const ru_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Устанавливайте моды для Sons of the Forest в один клик`)
};

const sv_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera moddar till Sons of the Forest med ett klick`)
};

const tr_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest modlarını tek tıkla kur`)
};

const zh_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一键安装《森林之子》模组`)
};

const ja_manager_title = /** @type {(inputs: Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の Mod をワンクリックでインストール`)
};

/**
* | output |
* | --- |
* | "Install Sons of the Forest mods with one click" |
*
* @param {Manager_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_title = /** @type {((inputs?: Manager_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_title(inputs)
	if (locale === "de") return de_manager_title(inputs)
	if (locale === "fr") return fr_manager_title(inputs)
	if (locale === "it") return it_manager_title(inputs)
	if (locale === "nl") return nl_manager_title(inputs)
	if (locale === "pl") return pl_manager_title(inputs)
	if (locale === "pt") return pt_manager_title(inputs)
	if (locale === "ru") return ru_manager_title(inputs)
	if (locale === "sv") return sv_manager_title(inputs)
	if (locale === "tr") return tr_manager_title(inputs)
	if (locale === "zh") return zh_manager_title(inputs)
	if (locale === "ja") return ja_manager_title(inputs)
	return en_manager_title(inputs)
});
