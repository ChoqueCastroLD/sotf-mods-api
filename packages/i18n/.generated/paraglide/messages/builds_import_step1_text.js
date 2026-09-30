/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Import_Step1_TextInputs */

const en_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare is the mod that places blueprints. It runs on RedLoader: if you have never installed a mod, follow the install guide first.`)
};

const es_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare es el mod que coloca los planos. Funciona con RedLoader: si nunca has instalado un mod, sigue primero la guía de instalación.`)
};

const de_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare ist der Mod, der Baupläne platziert. Er läuft mit RedLoader: Wenn du noch nie einen Mod installiert hast, folge zuerst der Installationsanleitung.`)
};

const fr_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare est le mod qui place les plans. Il fonctionne avec RedLoader : si vous n’avez jamais installé de mod, suivez d’abord le guide d’installation.`)
};

const it_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare è la mod che piazza i progetti. Funziona con RedLoader: se non hai mai installato una mod, segui prima la guida all’installazione.`)
};

const nl_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare is de mod die bouwtekeningen plaatst. Hij draait op RedLoader: heb je nog nooit een mod geïnstalleerd, volg dan eerst de installatiegids.`)
};

const pl_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare to mod, który stawia plany. Działa na RedLoaderze: jeśli nigdy nie instalowałeś moda, najpierw przejdź przez poradnik instalacji.`)
};

const pt_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O BuildShare é o mod que posiciona as plantas. Ele roda no RedLoader: se você nunca instalou um mod, siga primeiro o guia de instalação.`)
};

const ru_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare — мод, который ставит чертежи. Он работает на RedLoader: если вы никогда не ставили моды, сначала пройдите руководство по установке.`)
};

const sv_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare är modden som placerar ritningar. Den körs på RedLoader: har du aldrig installerat en mod, följ installationsguiden först.`)
};

const tr_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare, planları yerleştiren moddur. RedLoader üzerinde çalışır: daha önce hiç mod kurmadıysan önce kurulum rehberini izle.`)
};

const zh_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare 是负责放置蓝图的模组，运行在 RedLoader 上。如果你从没装过模组，请先按照安装指南操作。`)
};

const ja_builds_import_step1_text = /** @type {(inputs: Builds_Import_Step1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare は設計図を配置する MOD で、RedLoader 上で動きます。MOD を入れたことがなければ、まずインストールガイドに従ってください。`)
};

/**
* | output |
* | --- |
* | "BuildShare is the mod that places blueprints. It runs on RedLoader: if you have never installed a mod, follow the install guide first." |
*
* @param {Builds_Import_Step1_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_import_step1_text = /** @type {((inputs?: Builds_Import_Step1_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step1_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_import_step1_text(inputs)
	if (locale === "de") return de_builds_import_step1_text(inputs)
	if (locale === "fr") return fr_builds_import_step1_text(inputs)
	if (locale === "it") return it_builds_import_step1_text(inputs)
	if (locale === "nl") return nl_builds_import_step1_text(inputs)
	if (locale === "pl") return pl_builds_import_step1_text(inputs)
	if (locale === "pt") return pt_builds_import_step1_text(inputs)
	if (locale === "ru") return ru_builds_import_step1_text(inputs)
	if (locale === "sv") return sv_builds_import_step1_text(inputs)
	if (locale === "tr") return tr_builds_import_step1_text(inputs)
	if (locale === "zh") return zh_builds_import_step1_text(inputs)
	if (locale === "ja") return ja_builds_import_step1_text(inputs)
	return en_builds_import_step1_text(inputs)
});
