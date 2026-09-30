/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown>, build: NonNullable<unknown> }} Social_Compat_PromptInputs */

const en_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You downloaded v${i?.version}. Did it work on ${i?.build}?`)
};

const es_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargaste la v${i?.version}. ¿Funcionó en ${i?.build}?`)
};

const de_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du hast v${i?.version} heruntergeladen. Hat es auf ${i?.build} funktioniert?`)
};

const fr_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous avez téléchargé la v${i?.version}. Ça a marché sur ${i?.build} ?`)
};

const it_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hai scaricato la v${i?.version}. Ha funzionato su ${i?.build}?`)
};

const nl_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je hebt v${i?.version} gedownload. Werkte het op ${i?.build}?`)
};

const pl_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobrano v${i?.version}. Czy działało na ${i?.build}?`)
};

const pt_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você baixou a v${i?.version}. Funcionou no ${i?.build}?`)
};

const ru_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы скачали v${i?.version}. Сработало на ${i?.build}?`)
};

const sv_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du laddade ner v${i?.version}. Fungerade det på ${i?.build}?`)
};

const tr_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} sürümünü indirdin. ${i?.build} üzerinde çalıştı mı?`)
};

const zh_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你下载了 v${i?.version}。在 ${i?.build} 上能用吗？`)
};

const ja_social_compat_prompt = /** @type {(inputs: Social_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} をダウンロードしました。${i?.build} で動きましたか？`)
};

/**
* | output |
* | --- |
* | "You downloaded v{version}. Did it work on {build}?" |
*
* @param {Social_Compat_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_prompt = /** @type {((inputs: Social_Compat_PromptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_PromptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_prompt(inputs)
	if (locale === "de") return de_social_compat_prompt(inputs)
	if (locale === "fr") return fr_social_compat_prompt(inputs)
	if (locale === "it") return it_social_compat_prompt(inputs)
	if (locale === "nl") return nl_social_compat_prompt(inputs)
	if (locale === "pl") return pl_social_compat_prompt(inputs)
	if (locale === "pt") return pt_social_compat_prompt(inputs)
	if (locale === "ru") return ru_social_compat_prompt(inputs)
	if (locale === "sv") return sv_social_compat_prompt(inputs)
	if (locale === "tr") return tr_social_compat_prompt(inputs)
	if (locale === "zh") return zh_social_compat_prompt(inputs)
	if (locale === "ja") return ja_social_compat_prompt(inputs)
	return en_social_compat_prompt(inputs)
});
