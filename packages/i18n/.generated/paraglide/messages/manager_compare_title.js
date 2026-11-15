/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Compare_TitleInputs */

const en_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What the Install button replaces`)
};

const es_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo que reemplaza el botón Instalar`)
};

const de_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was der Installieren-Button ersetzt`)
};

const fr_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que remplace le bouton Installer`)
};

const it_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa sostituisce il pulsante Installa`)
};

const nl_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat de knop Installeren vervangt`)
};

const pl_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co zastępuje przycisk Zainstaluj`)
};

const pt_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que o botão Instalar substitui`)
};

const ru_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что заменяет кнопка «Установить»`)
};

const sv_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad knappen Installera ersätter`)
};

const tr_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kur düğmesinin yerini aldığı şeyler`)
};

const zh_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“安装”按钮替你做了什么`)
};

const ja_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「インストール」ボタンが代わりにすること`)
};

/**
* | output |
* | --- |
* | "What the Install button replaces" |
*
* @param {Manager_Compare_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_compare_title = /** @type {((inputs?: Manager_Compare_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Compare_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_compare_title(inputs)
	if (locale === "de") return de_manager_compare_title(inputs)
	if (locale === "fr") return fr_manager_compare_title(inputs)
	if (locale === "it") return it_manager_compare_title(inputs)
	if (locale === "nl") return nl_manager_compare_title(inputs)
	if (locale === "pl") return pl_manager_compare_title(inputs)
	if (locale === "pt") return pt_manager_compare_title(inputs)
	if (locale === "ru") return ru_manager_compare_title(inputs)
	if (locale === "sv") return sv_manager_compare_title(inputs)
	if (locale === "tr") return tr_manager_compare_title(inputs)
	if (locale === "zh") return zh_manager_compare_title(inputs)
	if (locale === "ja") return ja_manager_compare_title(inputs)
	return en_manager_compare_title(inputs)
});
