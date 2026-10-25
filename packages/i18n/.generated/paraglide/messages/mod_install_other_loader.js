/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ loader: NonNullable<unknown> }} Mod_Install_Other_LoaderInputs */

const en_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This mod is made for ${i?.loader}. Install it with the instructions in the description; RedManager does not install it.`)
};

const es_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Este mod está hecho para ${i?.loader}. Instálalo siguiendo las instrucciones de la descripción; RedManager no lo instala.`)
};

const de_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Diese Mod ist für ${i?.loader} gemacht. Installiere sie nach der Anleitung in der Beschreibung; RedManager installiert sie nicht.`)
};

const fr_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ce mod est fait pour ${i?.loader}. Installez-le avec les instructions de la description ; RedManager ne l’installe pas.`)
};

const it_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Questa mod è fatta per ${i?.loader}. Installala seguendo le istruzioni nella descrizione; RedManager non la installa.`)
};

const nl_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deze mod is gemaakt voor ${i?.loader}. Installeer hem met de instructies in de beschrijving; RedManager installeert hem niet.`)
};

const pl_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ten mod jest zrobiony dla ${i?.loader}. Zainstaluj go według instrukcji w opisie; RedManager go nie zainstaluje.`)
};

const pt_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Este mod foi feito para ${i?.loader}. Instale seguindo as instruções da descrição; o RedManager não o instala.`)
};

const ru_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Этот мод сделан для ${i?.loader}. Устанавливайте его по инструкции в описании; RedManager его не устанавливает.`)
};

const sv_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modden är gjord för ${i?.loader}. Installera den med instruktionerna i beskrivningen; RedManager installerar den inte.`)
};

const tr_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu mod ${i?.loader} için yapıldı. Açıklamadaki talimatlarla kur; RedManager bunu kurmaz.`)
};

const zh_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`此模组适用于 ${i?.loader}。请按照说明中的步骤安装；RedManager 无法安装它。`)
};

const ja_mod_install_other_loader = /** @type {(inputs: Mod_Install_Other_LoaderInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`このMODは ${i?.loader} 用です。説明の手順に従ってインストールしてください。RedManager ではインストールできません。`)
};

/**
* | output |
* | --- |
* | "This mod is made for {loader}. Install it with the instructions in the description; RedManager does not install it." |
*
* @param {Mod_Install_Other_LoaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_other_loader = /** @type {((inputs: Mod_Install_Other_LoaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Other_LoaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_other_loader(inputs)
	if (locale === "de") return de_mod_install_other_loader(inputs)
	if (locale === "fr") return fr_mod_install_other_loader(inputs)
	if (locale === "it") return it_mod_install_other_loader(inputs)
	if (locale === "nl") return nl_mod_install_other_loader(inputs)
	if (locale === "pl") return pl_mod_install_other_loader(inputs)
	if (locale === "pt") return pt_mod_install_other_loader(inputs)
	if (locale === "ru") return ru_mod_install_other_loader(inputs)
	if (locale === "sv") return sv_mod_install_other_loader(inputs)
	if (locale === "tr") return tr_mod_install_other_loader(inputs)
	if (locale === "zh") return zh_mod_install_other_loader(inputs)
	if (locale === "ja") return ja_mod_install_other_loader(inputs)
	return en_mod_install_other_loader(inputs)
});
