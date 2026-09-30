/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Signals_Compat_PromptInputs */

const en_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game build ${i?.build} is out. Did the mods you downloaded still work? Tell us.`)
};

const es_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ya salió la versión ${i?.build} del juego. ¿Siguen funcionando los mods que descargaste? Cuéntanos.`)
};

const de_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Spielbuild ${i?.build} ist da. Funktionieren die heruntergeladenen Mods noch? Sag es uns.`)
};

const fr_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La version ${i?.build} du jeu est sortie. Les mods que vous avez téléchargés fonctionnent-ils toujours ? Dites-le-nous.`)
};

const it_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`È uscita la build ${i?.build} del gioco. I mod che hai scaricato funzionano ancora? Dillo a noi.`)
};

const nl_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game-build ${i?.build} is uit. Werken de mods die je downloadde nog? Laat het ons weten.`)
};

const pl_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyszła wersja gry ${i?.build}. Czy pobrane przez Ciebie mody nadal działają? Daj nam znać.`)
};

const pt_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A build ${i?.build} do jogo saiu. Os mods que você baixou ainda funcionam? Conte para nós.`)
};

const ru_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вышла сборка игры ${i?.build}. Работают ли скачанные вами моды? Расскажите нам.`)
};

const sv_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spelversion ${i?.build} är ute. Fungerar modden du laddade ner fortfarande? Berätta för oss.`)
};

const tr_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oyunun ${i?.build} sürümü çıktı. İndirdiğin modlar hâlâ çalışıyor mu? Bize bildir.`)
};

const zh_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`游戏版本 ${i?.build} 已发布。你下载的模组还能正常运行吗？请告诉我们。`)
};

const ja_signals_compat_prompt = /** @type {(inputs: Signals_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ゲームのビルド ${i?.build} が公開されました。ダウンロードしたMODは今も動作していますか？ ぜひ教えてください。`)
};

/**
* | output |
* | --- |
* | "Game build {build} is out. Did the mods you downloaded still work? Tell us." |
*
* @param {Signals_Compat_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_compat_prompt = /** @type {((inputs: Signals_Compat_PromptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Compat_PromptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_compat_prompt(inputs)
	if (locale === "de") return de_signals_compat_prompt(inputs)
	if (locale === "fr") return fr_signals_compat_prompt(inputs)
	if (locale === "it") return it_signals_compat_prompt(inputs)
	if (locale === "nl") return nl_signals_compat_prompt(inputs)
	if (locale === "pl") return pl_signals_compat_prompt(inputs)
	if (locale === "pt") return pt_signals_compat_prompt(inputs)
	if (locale === "ru") return ru_signals_compat_prompt(inputs)
	if (locale === "sv") return sv_signals_compat_prompt(inputs)
	if (locale === "tr") return tr_signals_compat_prompt(inputs)
	if (locale === "zh") return zh_signals_compat_prompt(inputs)
	if (locale === "ja") return ja_signals_compat_prompt(inputs)
	return en_signals_compat_prompt(inputs)
});
