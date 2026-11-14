/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_New_4Inputs */

const en_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install a whole modpack in one click`)
};

const es_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala un modpack entero con un clic`)
};

const de_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein ganzes Modpack mit einem Klick installieren`)
};

const fr_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer un modpack entier en un clic`)
};

const it_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa un modpack intero con un clic`)
};

const nl_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer een complete modpack met één klik`)
};

const pl_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj cały modpack jednym kliknięciem`)
};

const pt_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale um modpack inteiro com um clique`)
};

const ru_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Устанавливайте целый модпак в один клик`)
};

const sv_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera ett helt modpaket med ett klick`)
};

const tr_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bütün bir mod paketini tek tıkla kur`)
};

const zh_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一键安装整个整合包`)
};

const ja_manager_new_4 = /** @type {(inputs: Manager_New_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックをワンクリックでまるごとインストール`)
};

/**
* | output |
* | --- |
* | "Install a whole modpack in one click" |
*
* @param {Manager_New_4Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_new_4 = /** @type {((inputs?: Manager_New_4Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_New_4Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_new_4(inputs)
	if (locale === "de") return de_manager_new_4(inputs)
	if (locale === "fr") return fr_manager_new_4(inputs)
	if (locale === "it") return it_manager_new_4(inputs)
	if (locale === "nl") return nl_manager_new_4(inputs)
	if (locale === "pl") return pl_manager_new_4(inputs)
	if (locale === "pt") return pt_manager_new_4(inputs)
	if (locale === "ru") return ru_manager_new_4(inputs)
	if (locale === "sv") return sv_manager_new_4(inputs)
	if (locale === "tr") return tr_manager_new_4(inputs)
	if (locale === "zh") return zh_manager_new_4(inputs)
	if (locale === "ja") return ja_manager_new_4(inputs)
	return en_manager_new_4(inputs)
});
