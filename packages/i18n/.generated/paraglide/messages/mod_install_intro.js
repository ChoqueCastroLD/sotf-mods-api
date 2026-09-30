/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Install_IntroInputs */

const en_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Five minutes, no manager required. These steps are for ${i?.name}.`)
};

const es_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cinco minutos y sin gestor. Estos pasos son para ${i?.name}.`)
};

const de_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fünf Minuten, kein Manager nötig. Diese Schritte gelten für ${i?.name}.`)
};

const fr_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cinq minutes, sans gestionnaire. Ces étapes concernent ${i?.name}.`)
};

const it_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cinque minuti, senza gestore. Questi passaggi sono per ${i?.name}.`)
};

const nl_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vijf minuten, geen manager nodig. Deze stappen gelden voor ${i?.name}.`)
};

const pl_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pięć minut, bez menedżera. Te kroki dotyczą ${i?.name}.`)
};

const pt_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cinco minutos, sem gerenciador. Estes passos são para ${i?.name}.`)
};

const ru_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Пять минут, без менеджера. Эти шаги — для ${i?.name}.`)
};

const sv_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fem minuter, ingen hanterare behövs. De här stegen gäller ${i?.name}.`)
};

const tr_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beş dakika, yönetici gerekmez. Bu adımlar ${i?.name} içindir.`)
};

const zh_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`五分钟搞定，无需管理器。以下步骤适用于 ${i?.name}。`)
};

const ja_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`5 分で完了、マネージャー不要。${i?.name} 用の手順です。`)
};

/**
* | output |
* | --- |
* | "Five minutes, no manager required. These steps are for {name}." |
*
* @param {Mod_Install_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_intro = /** @type {((inputs: Mod_Install_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_intro(inputs)
	if (locale === "de") return de_mod_install_intro(inputs)
	if (locale === "fr") return fr_mod_install_intro(inputs)
	if (locale === "it") return it_mod_install_intro(inputs)
	if (locale === "nl") return nl_mod_install_intro(inputs)
	if (locale === "pl") return pl_mod_install_intro(inputs)
	if (locale === "pt") return pt_mod_install_intro(inputs)
	if (locale === "ru") return ru_mod_install_intro(inputs)
	if (locale === "sv") return sv_mod_install_intro(inputs)
	if (locale === "tr") return tr_mod_install_intro(inputs)
	if (locale === "zh") return zh_mod_install_intro(inputs)
	if (locale === "ja") return ja_mod_install_intro(inputs)
	return en_mod_install_intro(inputs)
});
