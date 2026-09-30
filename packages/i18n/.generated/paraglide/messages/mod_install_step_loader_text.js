/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Loader_TextInputs */

const en_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader is the mod loader of Sons of the Forest. Install it once and every mod works.`)
};

const es_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader es el cargador de mods de Sons of the Forest. Se instala una vez y funcionan todos los mods.`)
};

const de_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader ist der Mod-Loader von Sons of the Forest. Einmal installiert, funktionieren alle Mods.`)
};

const fr_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader est le chargeur de mods de Sons of the Forest. Installez-le une fois et tous les mods fonctionnent.`)
};

const it_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader è il caricatore di mod di Sons of the Forest. Si installa una volta e funzionano tutte le mod.`)
};

const nl_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader is de modloader van Sons of the Forest. Eén keer installeren en elke mod werkt.`)
};

const pl_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader to loader modów do Sons of the Forest. Instalujesz go raz i działa każdy mod.`)
};

const pt_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O RedLoader é o carregador de mods de Sons of the Forest. Instale uma vez e todos os mods funcionam.`)
};

const ru_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader — загрузчик модов Sons of the Forest. Установите его один раз, и заработают все моды.`)
};

const sv_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader är modladdaren för Sons of the Forest. Installera den en gång så fungerar alla moddar.`)
};

const tr_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader, Sons of the Forest’ın mod yükleyicisidir. Bir kez kur, tüm modlar çalışsın.`)
};

const zh_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader 是 Sons of the Forest 的模组加载器。安装一次，所有模组都能用。`)
};

const ja_mod_install_step_loader_text = /** @type {(inputs: Mod_Install_Step_Loader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader は Sons of the Forest の MOD ローダーです。一度入れればすべての MOD が動きます。`)
};

/**
* | output |
* | --- |
* | "RedLoader is the mod loader of Sons of the Forest. Install it once and every mod works." |
*
* @param {Mod_Install_Step_Loader_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_loader_text = /** @type {((inputs?: Mod_Install_Step_Loader_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Loader_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_loader_text(inputs)
	if (locale === "de") return de_mod_install_step_loader_text(inputs)
	if (locale === "fr") return fr_mod_install_step_loader_text(inputs)
	if (locale === "it") return it_mod_install_step_loader_text(inputs)
	if (locale === "nl") return nl_mod_install_step_loader_text(inputs)
	if (locale === "pl") return pl_mod_install_step_loader_text(inputs)
	if (locale === "pt") return pt_mod_install_step_loader_text(inputs)
	if (locale === "ru") return ru_mod_install_step_loader_text(inputs)
	if (locale === "sv") return sv_mod_install_step_loader_text(inputs)
	if (locale === "tr") return tr_mod_install_step_loader_text(inputs)
	if (locale === "zh") return zh_mod_install_step_loader_text(inputs)
	if (locale === "ja") return ja_mod_install_step_loader_text(inputs)
	return en_mod_install_step_loader_text(inputs)
});
