/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_New_1Inputs */

const en_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Click Install on any mod`)
};

const es_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haz clic en Instalar en cualquier mod`)
};

const de_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bei jedem Mod auf Installieren klicken`)
};

const fr_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliquer sur Installer sur n’importe quel mod`)
};

const it_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clicca Installa su qualsiasi mod`)
};

const nl_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klik op Installeren bij elke mod`)
};

const pl_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kliknij Zainstaluj przy dowolnym modzie`)
};

const pt_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clique em Instalar em qualquer mod`)
};

const ru_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите «Установить» у любого мода`)
};

const sv_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klicka på Installera på vilken modd som helst`)
};

const tr_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herhangi bir modda Kur'a tıkla`)
};

const zh_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在任意模组上点击“安装”`)
};

const ja_manager_new_1 = /** @type {(inputs: Manager_New_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`どの Mod でも「インストール」をクリック`)
};

/**
* | output |
* | --- |
* | "Click Install on any mod" |
*
* @param {Manager_New_1Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_new_1 = /** @type {((inputs?: Manager_New_1Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_New_1Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_new_1(inputs)
	if (locale === "de") return de_manager_new_1(inputs)
	if (locale === "fr") return fr_manager_new_1(inputs)
	if (locale === "it") return it_manager_new_1(inputs)
	if (locale === "nl") return nl_manager_new_1(inputs)
	if (locale === "pl") return pl_manager_new_1(inputs)
	if (locale === "pt") return pt_manager_new_1(inputs)
	if (locale === "ru") return ru_manager_new_1(inputs)
	if (locale === "sv") return sv_manager_new_1(inputs)
	if (locale === "tr") return tr_manager_new_1(inputs)
	if (locale === "zh") return zh_manager_new_1(inputs)
	if (locale === "ja") return ja_manager_new_1(inputs)
	return en_manager_new_1(inputs)
});
