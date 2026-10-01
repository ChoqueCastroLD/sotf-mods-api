/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Emails_Notify_Item_Compat_PromptInputs */

const en_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game build ${i?.build} is out: tell us if the mods you downloaded still work`)
};

const es_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ya salió la versión ${i?.build} del juego: cuéntanos si los mods que descargaste siguen funcionando`)
};

const de_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Spielbuild ${i?.build} ist da: Sag uns, ob die heruntergeladenen Mods noch funktionieren`)
};

const fr_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La version ${i?.build} du jeu est sortie : dites-nous si les mods téléchargés fonctionnent toujours`)
};

const it_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`È uscita la build ${i?.build} del gioco: dicci se i mod scaricati funzionano ancora`)
};

const nl_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game-build ${i?.build} is uit: laat ons weten of de mods die je downloadde nog werken`)
};

const pl_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyszła wersja gry ${i?.build}: daj nam znać, czy pobrane mody nadal działają`)
};

const pt_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A build ${i?.build} do jogo saiu: conte se os mods que você baixou ainda funcionam`)
};

const ru_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вышла сборка игры ${i?.build}: расскажите, работают ли скачанные вами моды`)
};

const sv_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spelversion ${i?.build} är ute: berätta om modden du laddade ner fortfarande fungerar`)
};

const tr_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oyunun ${i?.build} sürümü çıktı: indirdiğin modların hâlâ çalışıp çalışmadığını bize bildir`)
};

const zh_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`游戏版本 ${i?.build} 已发布：请告诉我们你下载的模组是否仍能运行`)
};

const ja_emails_notify_item_compat_prompt = /** @type {(inputs: Emails_Notify_Item_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ゲームのビルド ${i?.build} が公開されました。ダウンロードしたMODが今も動作するか教えてください`)
};

/**
* | output |
* | --- |
* | "Game build {build} is out: tell us if the mods you downloaded still work" |
*
* @param {Emails_Notify_Item_Compat_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_compat_prompt = /** @type {((inputs: Emails_Notify_Item_Compat_PromptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Compat_PromptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_compat_prompt(inputs)
	if (locale === "de") return de_emails_notify_item_compat_prompt(inputs)
	if (locale === "fr") return fr_emails_notify_item_compat_prompt(inputs)
	if (locale === "it") return it_emails_notify_item_compat_prompt(inputs)
	if (locale === "nl") return nl_emails_notify_item_compat_prompt(inputs)
	if (locale === "pl") return pl_emails_notify_item_compat_prompt(inputs)
	if (locale === "pt") return pt_emails_notify_item_compat_prompt(inputs)
	if (locale === "ru") return ru_emails_notify_item_compat_prompt(inputs)
	if (locale === "sv") return sv_emails_notify_item_compat_prompt(inputs)
	if (locale === "tr") return tr_emails_notify_item_compat_prompt(inputs)
	if (locale === "zh") return zh_emails_notify_item_compat_prompt(inputs)
	if (locale === "ja") return ja_emails_notify_item_compat_prompt(inputs)
	return en_emails_notify_item_compat_prompt(inputs)
});
