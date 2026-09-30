/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_IntroInputs */

const en_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every version you released, including those in review. Yank a version to warn players away from it: its link keeps working with a warning.`)
};

const es_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las versiones que has lanzado, también las que están en revisión. Retira una versión para avisar a los jugadores: su enlace sigue funcionando con un aviso.`)
};

const de_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Version, die du veröffentlicht hast, auch die in Prüfung. Ziehe eine Version zurück, um Spieler zu warnen: ihr Link funktioniert weiter, mit einem Hinweis.`)
};

const fr_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les versions que vous avez sorties, y compris celles en revue. Retirez une version pour prévenir les joueurs : son lien reste valable, avec un avertissement.`)
};

const it_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le versioni che hai pubblicato, anche quelle in revisione. Ritira una versione per avvisare i giocatori: il suo link continua a funzionare, con un avviso.`)
};

const nl_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke versie die je uitbracht, ook die in beoordeling. Trek een versie in om spelers te waarschuwen: de link blijft werken, met een waarschuwing.`)
};

const pl_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każda wydana wersja, także te w przeglądzie. Wycofaj wersję, aby ostrzec graczy: jej link dalej działa, z ostrzeżeniem.`)
};

const pt_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as versões que você lançou, inclusive as em revisão. Retire uma versão para alertar os jogadores: o link continua funcionando, com um aviso.`)
};

const ru_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все выпущенные версии, включая те, что на проверке. Отзовите версию, чтобы предупредить игроков: её ссылка продолжит работать, но с предупреждением.`)
};

const sv_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje version du har släppt, även de under granskning. Dra tillbaka en version för att varna spelare: länken fungerar fortfarande, med en varning.`)
};

const tr_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkardığın her sürüm, incelemedekiler dahil. Oyuncuları uyarmak için bir sürümü geri çek: bağlantısı bir uyarıyla çalışmaya devam eder.`)
};

const zh_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你发布的所有版本，包括审核中的版本。撤回版本可提醒玩家：其链接仍然有效，但会显示警告。`)
};

const ja_basecamp_versions_intro = /** @type {(inputs: Basecamp_Versions_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これまでにリリースしたすべてのバージョン（審査中を含む）。バージョンを取り下げるとプレイヤーに警告が表示されます。リンクは警告付きで引き続き使えます。`)
};

/**
* | output |
* | --- |
* | "Every version you released, including those in review. Yank a version to warn players away from it: its link keeps working with a warning." |
*
* @param {Basecamp_Versions_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_intro = /** @type {((inputs?: Basecamp_Versions_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_intro(inputs)
	if (locale === "de") return de_basecamp_versions_intro(inputs)
	if (locale === "fr") return fr_basecamp_versions_intro(inputs)
	if (locale === "it") return it_basecamp_versions_intro(inputs)
	if (locale === "nl") return nl_basecamp_versions_intro(inputs)
	if (locale === "pl") return pl_basecamp_versions_intro(inputs)
	if (locale === "pt") return pt_basecamp_versions_intro(inputs)
	if (locale === "ru") return ru_basecamp_versions_intro(inputs)
	if (locale === "sv") return sv_basecamp_versions_intro(inputs)
	if (locale === "tr") return tr_basecamp_versions_intro(inputs)
	if (locale === "zh") return zh_basecamp_versions_intro(inputs)
	if (locale === "ja") return ja_basecamp_versions_intro(inputs)
	return en_basecamp_versions_intro(inputs)
});
