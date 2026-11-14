/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_IntroInputs */

const en_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready-made sets of mods. Download a modpack and SotF Mods Manager installs all its mods in one go.`)
};

const es_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conjuntos de mods listos para usar. Descarga un modpack y SotF Mods Manager instala todos sus mods de una vez.`)
};

const de_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fertige Mod-Sammlungen. Lade ein Modpack herunter und SotF Mods Manager installiert alle Mods auf einmal.`)
};

const fr_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des ensembles de mods prêts à l’emploi. Téléchargez un modpack et SotF Mods Manager installe tous ses mods d’un coup.`)
};

const it_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raccolte di mod pronte all’uso. Scarica un modpack e SotF Mods Manager installa tutte le mod in un colpo solo.`)
};

const nl_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kant-en-klare sets mods. Download een modpack en SotF Mods Manager installeert alle mods in één keer.`)
};

const pl_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gotowe zestawy modów. Pobierz modpack, a SotF Mods Manager zainstaluje wszystkie mody za jednym razem.`)
};

const pt_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conjuntos de mods prontos para usar. Baixe um modpack e o SotF Mods Manager instala todos os mods de uma vez.`)
};

const ru_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готовые наборы модов. Скачайте модпак, и SotF Mods Manager установит все моды за один раз.`)
};

const sv_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Färdiga samlingar av moddar. Ladda ner ett modpaket och SotF Mods Manager installerar alla moddar på en gång.`)
};

const tr_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hazır mod setleri. Bir mod paketi indir, SotF Mods Manager tüm modları tek seferde kursun.`)
};

const zh_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`现成的模组组合。下载整合包后，SotF Mods Manager 会一次性安装其中的所有模组。`)
};

const ja_modpacks_intro = /** @type {(inputs: Modpacks_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すぐに使える Mod のセット。Modパックをダウンロードすると、SotF Mods Manager がすべての Mod を一度にインストールします。`)
};

/**
* | output |
* | --- |
* | "Ready-made sets of mods. Download a modpack and SotF Mods Manager installs all its mods in one go." |
*
* @param {Modpacks_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_intro = /** @type {((inputs?: Modpacks_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_intro(inputs)
	if (locale === "de") return de_modpacks_intro(inputs)
	if (locale === "fr") return fr_modpacks_intro(inputs)
	if (locale === "it") return it_modpacks_intro(inputs)
	if (locale === "nl") return nl_modpacks_intro(inputs)
	if (locale === "pl") return pl_modpacks_intro(inputs)
	if (locale === "pt") return pt_modpacks_intro(inputs)
	if (locale === "ru") return ru_modpacks_intro(inputs)
	if (locale === "sv") return sv_modpacks_intro(inputs)
	if (locale === "tr") return tr_modpacks_intro(inputs)
	if (locale === "zh") return zh_modpacks_intro(inputs)
	if (locale === "ja") return ja_modpacks_intro(inputs)
	return en_modpacks_intro(inputs)
});
