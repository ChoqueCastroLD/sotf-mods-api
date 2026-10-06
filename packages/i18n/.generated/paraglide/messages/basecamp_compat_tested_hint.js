/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Tested_HintInputs */

const en_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The builds you tested each version on. Players see them on the mod page.`)
};

const es_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las builds en las que probaste cada versión. Los jugadores las ven en la página del mod.`)
};

const de_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Builds, mit denen du jede Version getestet hast. Spieler sehen sie auf der Mod-Seite.`)
};

const fr_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les builds sur lesquels vous avez testé chaque version. Les joueurs les voient sur la page du mod.`)
};

const it_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le build su cui hai testato ogni versione. I giocatori le vedono nella pagina della mod.`)
};

const nl_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De builds waarop je elke versie hebt getest. Spelers zien ze op de modpagina.`)
};

const pl_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildy, na których testowałeś każdą wersję. Gracze widzą je na stronie moda.`)
};

const pt_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As builds em que você testou cada versão. Os jogadores as veem na página do mod.`)
};

const ru_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Билды, на которых вы проверили каждую версию. Игроки видят их на странице мода.`)
};

const sv_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De builds du testade varje version på. Spelare ser dem på moddsidan.`)
};

const tr_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her sürümü test ettiğin oyun sürümleri. Oyuncular bunları mod sayfasında görür.`)
};

const zh_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你测试过每个版本的游戏版本。玩家会在模组页面上看到它们。`)
};

const ja_basecamp_compat_tested_hint = /** @type {(inputs: Basecamp_Compat_Tested_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各バージョンを確認したビルド。プレイヤーには MOD ページに表示されます。`)
};

/**
* | output |
* | --- |
* | "The builds you tested each version on. Players see them on the mod page." |
*
* @param {Basecamp_Compat_Tested_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_tested_hint = /** @type {((inputs?: Basecamp_Compat_Tested_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Tested_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_tested_hint(inputs)
	if (locale === "de") return de_basecamp_compat_tested_hint(inputs)
	if (locale === "fr") return fr_basecamp_compat_tested_hint(inputs)
	if (locale === "it") return it_basecamp_compat_tested_hint(inputs)
	if (locale === "nl") return nl_basecamp_compat_tested_hint(inputs)
	if (locale === "pl") return pl_basecamp_compat_tested_hint(inputs)
	if (locale === "pt") return pt_basecamp_compat_tested_hint(inputs)
	if (locale === "ru") return ru_basecamp_compat_tested_hint(inputs)
	if (locale === "sv") return sv_basecamp_compat_tested_hint(inputs)
	if (locale === "tr") return tr_basecamp_compat_tested_hint(inputs)
	if (locale === "zh") return zh_basecamp_compat_tested_hint(inputs)
	if (locale === "ja") return ja_basecamp_compat_tested_hint(inputs)
	return en_basecamp_compat_tested_hint(inputs)
});
