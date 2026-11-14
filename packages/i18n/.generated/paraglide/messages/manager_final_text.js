/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Final_TextInputs */

const en_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download SotF Mods Manager, pick your mods or a modpack and play. Free, open source and made for SOTF Mods.`)
};

const es_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga SotF Mods Manager, elige tus mods o un modpack y juega. Gratis, de código abierto y hecho para SOTF Mods.`)
};

const de_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade SotF Mods Manager herunter, wähle deine Mods oder ein Modpack und spiel los. Kostenlos, Open Source und gemacht für SOTF Mods.`)
};

const fr_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargez SotF Mods Manager, choisissez vos mods ou un modpack et jouez. Gratuit, open source et fait pour SOTF Mods.`)
};

const it_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica SotF Mods Manager, scegli le tue mod o un modpack e gioca. Gratis, open source e fatto per SOTF Mods.`)
};

const nl_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download SotF Mods Manager, kies je mods of een modpack en speel. Gratis, open source en gemaakt voor SOTF Mods.`)
};

const pl_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz SotF Mods Manager, wybierz mody lub modpack i graj. Darmowy, open source i stworzony dla SOTF Mods.`)
};

const pt_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixe o SotF Mods Manager, escolha seus mods ou um modpack e jogue. Grátis, de código aberto e feito para o SOTF Mods.`)
};

const ru_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачайте SotF Mods Manager, выберите моды или модпак и играйте. Бесплатно, с открытым кодом и создан для SOTF Mods.`)
};

const sv_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner SotF Mods Manager, välj dina moddar eller ett modpaket och spela. Gratis, öppen källkod och gjord för SOTF Mods.`)
};

const tr_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager'ı indir, modlarını ya da bir mod paketini seç ve oyna. Ücretsiz, açık kaynak ve SOTF Mods için yapıldı.`)
};

const zh_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载 SotF Mods Manager，选择模组或整合包，然后开玩。免费、开源，专为 SOTF Mods 打造。`)
};

const ja_manager_final_text = /** @type {(inputs: Manager_Final_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager をダウンロードして、Mod か Modパックを選んで遊びましょう。無料・オープンソースで、SOTF Mods のために作られています。`)
};

/**
* | output |
* | --- |
* | "Download SotF Mods Manager, pick your mods or a modpack and play. Free, open source and made for SOTF Mods." |
*
* @param {Manager_Final_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_final_text = /** @type {((inputs?: Manager_Final_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Final_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_final_text(inputs)
	if (locale === "de") return de_manager_final_text(inputs)
	if (locale === "fr") return fr_manager_final_text(inputs)
	if (locale === "it") return it_manager_final_text(inputs)
	if (locale === "nl") return nl_manager_final_text(inputs)
	if (locale === "pl") return pl_manager_final_text(inputs)
	if (locale === "pt") return pt_manager_final_text(inputs)
	if (locale === "ru") return ru_manager_final_text(inputs)
	if (locale === "sv") return sv_manager_final_text(inputs)
	if (locale === "tr") return tr_manager_final_text(inputs)
	if (locale === "zh") return zh_manager_final_text(inputs)
	if (locale === "ja") return ja_manager_final_text(inputs)
	return en_manager_final_text(inputs)
});
