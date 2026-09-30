/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Redloader_Not_BepinexInputs */

const en_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This mod needs RedLoader, not BepInEx. BepInEx mods and guides don’t apply to Sons of the Forest.`)
};

const es_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod necesita RedLoader, no BepInEx. Los mods y guías de BepInEx no sirven para Sons of the Forest.`)
};

const de_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Mod braucht RedLoader, nicht BepInEx. BepInEx-Mods und -Anleitungen gelten nicht für Sons of the Forest.`)
};

const fr_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mod nécessite RedLoader, pas BepInEx. Les mods et guides BepInEx ne s’appliquent pas à Sons of the Forest.`)
};

const it_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa mod richiede RedLoader, non BepInEx. Le mod e le guide per BepInEx non valgono per Sons of the Forest.`)
};

const nl_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mod heeft RedLoader nodig, niet BepInEx. BepInEx-mods en -gidsen gelden niet voor Sons of the Forest.`)
};

const pl_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten mod wymaga RedLoadera, nie BepInEx. Mody i poradniki do BepInEx nie dotyczą Sons of the Forest.`)
};

const pt_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod precisa do RedLoader, não do BepInEx. Mods e guias de BepInEx não valem para Sons of the Forest.`)
};

const ru_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этому моду нужен RedLoader, а не BepInEx. Моды и гайды для BepInEx к Sons of the Forest не подходят.`)
};

const sv_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här moden kräver RedLoader, inte BepInEx. BepInEx-moddar och guider gäller inte Sons of the Forest.`)
};

const tr_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod BepInEx değil, RedLoader gerektirir. BepInEx modları ve rehberleri Sons of the Forest için geçerli değildir.`)
};

const zh_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此模组需要 RedLoader，而不是 BepInEx。BepInEx 的模组和教程不适用于 Sons of the Forest。`)
};

const ja_mod_install_redloader_not_bepinex = /** @type {(inputs: Mod_Install_Redloader_Not_BepinexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD には BepInEx ではなく RedLoader が必要です。BepInEx 向けの MOD や解説は Sons of the Forest には使えません。`)
};

/**
* | output |
* | --- |
* | "This mod needs RedLoader, not BepInEx. BepInEx mods and guides don’t apply to Sons of the Forest." |
*
* @param {Mod_Install_Redloader_Not_BepinexInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_redloader_not_bepinex = /** @type {((inputs?: Mod_Install_Redloader_Not_BepinexInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Redloader_Not_BepinexInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_redloader_not_bepinex(inputs)
	if (locale === "de") return de_mod_install_redloader_not_bepinex(inputs)
	if (locale === "fr") return fr_mod_install_redloader_not_bepinex(inputs)
	if (locale === "it") return it_mod_install_redloader_not_bepinex(inputs)
	if (locale === "nl") return nl_mod_install_redloader_not_bepinex(inputs)
	if (locale === "pl") return pl_mod_install_redloader_not_bepinex(inputs)
	if (locale === "pt") return pt_mod_install_redloader_not_bepinex(inputs)
	if (locale === "ru") return ru_mod_install_redloader_not_bepinex(inputs)
	if (locale === "sv") return sv_mod_install_redloader_not_bepinex(inputs)
	if (locale === "tr") return tr_mod_install_redloader_not_bepinex(inputs)
	if (locale === "zh") return zh_mod_install_redloader_not_bepinex(inputs)
	if (locale === "ja") return ja_mod_install_redloader_not_bepinex(inputs)
	return en_mod_install_redloader_not_bepinex(inputs)
});
