/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Compare_TextInputs */

const en_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installing mods by hand works, but it is slow and easy to get wrong. The manager does every step for you.`)
};

const es_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar mods a mano funciona, pero es lento y fácil de equivocarse. El manager hace cada paso por ti.`)
};

const de_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods von Hand zu installieren klappt, ist aber langsam und fehleranfällig. Der Manager erledigt jeden Schritt für dich.`)
};

const fr_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer des mods à la main fonctionne, mais c’est lent et source d’erreurs. Le manager fait chaque étape pour vous.`)
};

const it_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installare mod a mano funziona, ma è lento e facile sbagliare. Il manager fa ogni passo per te.`)
};

const nl_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods met de hand installeren werkt, maar het is traag en foutgevoelig. De manager doet elke stap voor je.`)
};

const pl_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ręczna instalacja modów działa, ale jest powolna i łatwo o błąd. Menedżer zrobi każdy krok za ciebie.`)
};

const pt_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar mods à mão funciona, mas é lento e fácil de errar. O manager faz cada passo por você.`)
};

const ru_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ставить моды вручную можно, но это долго и легко ошибиться. Менеджер сделает каждый шаг за вас.`)
};

const sv_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Att installera moddar för hand fungerar, men det går långsamt och är lätt att göra fel. Managern gör varje steg åt dig.`)
};

const tr_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları elle kurmak işe yarar ama yavaştır ve hata yapmak kolaydır. Yönetici her adımı senin yerine yapar.`)
};

const zh_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手动安装模组可行，但又慢又容易出错。管理器会替你完成每一步。`)
};

const ja_manager_compare_text = /** @type {(inputs: Manager_Compare_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手作業での Mod 導入もできますが、時間がかかりミスもしがちです。マネージャーがすべての手順を代わりに行います。`)
};

/**
* | output |
* | --- |
* | "Installing mods by hand works, but it is slow and easy to get wrong. The manager does every step for you." |
*
* @param {Manager_Compare_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_compare_text = /** @type {((inputs?: Manager_Compare_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Compare_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_compare_text(inputs)
	if (locale === "de") return de_manager_compare_text(inputs)
	if (locale === "fr") return fr_manager_compare_text(inputs)
	if (locale === "it") return it_manager_compare_text(inputs)
	if (locale === "nl") return nl_manager_compare_text(inputs)
	if (locale === "pl") return pl_manager_compare_text(inputs)
	if (locale === "pt") return pt_manager_compare_text(inputs)
	if (locale === "ru") return ru_manager_compare_text(inputs)
	if (locale === "sv") return sv_manager_compare_text(inputs)
	if (locale === "tr") return tr_manager_compare_text(inputs)
	if (locale === "zh") return zh_manager_compare_text(inputs)
	if (locale === "ja") return ja_manager_compare_text(inputs)
	return en_manager_compare_text(inputs)
});
