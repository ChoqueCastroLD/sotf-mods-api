/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Manager_TipInputs */

const en_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager installs and updates mods and their dependencies for you.`)
};

const es_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager instala y actualiza los mods y sus dependencias por ti.`)
};

const de_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager installiert und aktualisiert Mods samt Abhängigkeiten für dich.`)
};

const fr_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager installe et met à jour les mods et leurs dépendances pour vous.`)
};

const it_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager installa e aggiorna le mod e le loro dipendenze per te.`)
};

const nl_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager installeert en werkt mods en hun afhankelijkheden voor je bij.`)
};

const pl_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager zainstaluje i zaktualizuje mody oraz ich zależności za ciebie.`)
};

const pt_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O RedManager instala e atualiza os mods e as dependências para você.`)
};

const ru_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager сам установит и обновит моды и их зависимости.`)
};

const sv_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager installerar och uppdaterar moddar och deras beroenden åt dig.`)
};

const tr_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager modları ve bağımlılıklarını senin için kurar ve günceller.`)
};

const zh_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager 可以替你安装和更新模组及其前置。`)
};

const ja_mod_install_manager_tip = /** @type {(inputs: Mod_Install_Manager_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager なら MOD と前提 MOD のインストールや更新を自動で行えます。`)
};

/**
* | output |
* | --- |
* | "RedManager installs and updates mods and their dependencies for you." |
*
* @param {Mod_Install_Manager_TipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_manager_tip = /** @type {((inputs?: Mod_Install_Manager_TipInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Manager_TipInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_manager_tip(inputs)
	if (locale === "de") return de_mod_install_manager_tip(inputs)
	if (locale === "fr") return fr_mod_install_manager_tip(inputs)
	if (locale === "it") return it_mod_install_manager_tip(inputs)
	if (locale === "nl") return nl_mod_install_manager_tip(inputs)
	if (locale === "pl") return pl_mod_install_manager_tip(inputs)
	if (locale === "pt") return pt_mod_install_manager_tip(inputs)
	if (locale === "ru") return ru_mod_install_manager_tip(inputs)
	if (locale === "sv") return sv_mod_install_manager_tip(inputs)
	if (locale === "tr") return tr_mod_install_manager_tip(inputs)
	if (locale === "zh") return zh_mod_install_manager_tip(inputs)
	if (locale === "ja") return ja_mod_install_manager_tip(inputs)
	return en_mod_install_manager_tip(inputs)
});
