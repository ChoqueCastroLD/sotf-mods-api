/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Latest_Only_HintInputs */

const en_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Players can only download the newest version. Older versions stay listed with their changelogs, but their download links stop working. Use this when older versions have bugs you do not want people to go back to.`)
};

const es_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los jugadores solo podrán descargar la versión más reciente. Las versiones anteriores siguen listadas con sus cambios, pero sus enlaces de descarga dejan de funcionar. Úsalo si las versiones antiguas tienen errores y no quieres que la gente vuelva a ellas.`)
};

const de_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spieler können nur die neueste Version herunterladen. Ältere Versionen bleiben mit ihren Änderungsprotokollen sichtbar, ihre Download-Links funktionieren aber nicht mehr. Nutze das, wenn ältere Versionen Fehler haben, zu denen niemand zurückkehren soll.`)
};

const fr_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les joueurs ne peuvent télécharger que la version la plus récente. Les anciennes versions restent listées avec leur journal des modifications, mais leurs liens de téléchargement ne fonctionnent plus. Utilisez-le si d’anciennes versions ont des bugs vers lesquels vous ne voulez pas que l’on revienne.`)
};

const it_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I giocatori possono scaricare solo la versione più recente. Le versioni precedenti restano elencate con i loro changelog, ma i link di download smettono di funzionare. Usalo se le versioni vecchie hanno bug a cui non vuoi che si torni.`)
};

const nl_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelers kunnen alleen de nieuwste versie downloaden. Oudere versies blijven zichtbaar met hun wijzigingslog, maar hun downloadlinks werken niet meer. Gebruik dit als oudere versies bugs hebben waar je niet wilt dat mensen naar teruggaan.`)
};

const pl_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracze mogą pobrać tylko najnowszą wersję. Starsze wersje pozostają na liście z listą zmian, ale ich linki do pobrania przestają działać. Użyj tego, jeśli starsze wersje mają błędy, do których nie chcesz, by ktoś wracał.`)
};

const pt_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os jogadores só poderão baixar a versão mais recente. As versões antigas continuam listadas com seus registros de alterações, mas os links de download deixam de funcionar. Use isto se versões antigas tiverem bugs para os quais você não quer que as pessoas voltem.`)
};

const ru_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игроки смогут скачать только самую новую версию. Старые версии останутся в списке со списком изменений, но ссылки на их скачивание перестанут работать. Используйте это, если в старых версиях есть ошибки и вы не хотите, чтобы к ним возвращались.`)
};

const sv_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelare kan bara ladda ner den senaste versionen. Äldre versioner finns kvar i listan med sina ändringsloggar, men deras nedladdningslänkar slutar fungera. Använd det här om äldre versioner har buggar som du inte vill att folk går tillbaka till.`)
};

const tr_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncular yalnızca en yeni sürümü indirebilir. Eski sürümler değişiklik notlarıyla listede kalır, ancak indirme bağlantıları çalışmaz. Eski sürümlerde insanların geri dönmesini istemediğin hatalar varsa bunu kullan.`)
};

const zh_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩家只能下载最新版本。旧版本仍会连同更新日志一起显示，但其下载链接将失效。如果旧版本存在你不希望玩家退回的错误，请使用此选项。`)
};

const ja_basecamp_latest_only_hint = /** @type {(inputs: Basecamp_Latest_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーは最新バージョンのみダウンロードできます。古いバージョンは変更履歴とともに表示されたままですが、ダウンロードリンクは使えなくなります。古いバージョンに戻ってほしくない不具合がある場合に使ってください。`)
};

/**
* | output |
* | --- |
* | "Players can only download the newest version. Older versions stay listed with their changelogs, but their download links stop working. Use this when older ve..." |
*
* @param {Basecamp_Latest_Only_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_latest_only_hint = /** @type {((inputs?: Basecamp_Latest_Only_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Latest_Only_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_latest_only_hint(inputs)
	if (locale === "de") return de_basecamp_latest_only_hint(inputs)
	if (locale === "fr") return fr_basecamp_latest_only_hint(inputs)
	if (locale === "it") return it_basecamp_latest_only_hint(inputs)
	if (locale === "nl") return nl_basecamp_latest_only_hint(inputs)
	if (locale === "pl") return pl_basecamp_latest_only_hint(inputs)
	if (locale === "pt") return pt_basecamp_latest_only_hint(inputs)
	if (locale === "ru") return ru_basecamp_latest_only_hint(inputs)
	if (locale === "sv") return sv_basecamp_latest_only_hint(inputs)
	if (locale === "tr") return tr_basecamp_latest_only_hint(inputs)
	if (locale === "zh") return zh_basecamp_latest_only_hint(inputs)
	if (locale === "ja") return ja_basecamp_latest_only_hint(inputs)
	return en_basecamp_latest_only_hint(inputs)
});
