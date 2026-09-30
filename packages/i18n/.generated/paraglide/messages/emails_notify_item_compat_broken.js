/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ status: NonNullable<unknown>, mod: NonNullable<unknown>, build: NonNullable<unknown> }} Emails_Notify_Item_Compat_BrokenInputs */

const en_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Players report that ${i?.mod} is broken on game build ${i?.build}`);
	return /** @type {LocalizedString} */ (`Players report mixed results for ${i?.mod} on game build ${i?.build}`)
	
};

const es_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Los jugadores dicen que ${i?.mod} no funciona en la build ${i?.build} del juego`);
	return /** @type {LocalizedString} */ (`Los jugadores reportan resultados dispares de ${i?.mod} en la build ${i?.build} del juego`)
	
};

const de_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Spieler melden, dass ${i?.mod} auf dem Spiel-Build ${i?.build} nicht funktioniert`);
	return /** @type {LocalizedString} */ (`Spieler melden gemischte Ergebnisse für ${i?.mod} auf dem Spiel-Build ${i?.build}`)
	
};

const fr_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Des joueurs signalent que ${i?.mod} ne fonctionne pas sur la build ${i?.build} du jeu`);
	return /** @type {LocalizedString} */ (`Des joueurs signalent des résultats mitigés pour ${i?.mod} sur la build ${i?.build} du jeu`)
	
};

const it_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`I giocatori segnalano che ${i?.mod} non funziona sulla build ${i?.build} del gioco`);
	return /** @type {LocalizedString} */ (`I giocatori segnalano risultati contrastanti per ${i?.mod} sulla build ${i?.build} del gioco`)
	
};

const nl_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Spelers melden dat ${i?.mod} niet werkt op gamebuild ${i?.build}`);
	return /** @type {LocalizedString} */ (`Spelers melden wisselende resultaten voor ${i?.mod} op gamebuild ${i?.build}`)
	
};

const pl_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Gracze zgłaszają, że ${i?.mod} nie działa na buildzie gry ${i?.build}`);
	return /** @type {LocalizedString} */ (`Gracze zgłaszają mieszane wyniki dla ${i?.mod} na buildzie gry ${i?.build}`)
	
};

const pt_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Jogadores relatam que ${i?.mod} não funciona na build ${i?.build} do jogo`);
	return /** @type {LocalizedString} */ (`Jogadores relatam resultados mistos para ${i?.mod} na build ${i?.build} do jogo`)
	
};

const ru_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Игроки сообщают, что ${i?.mod} не работает на сборке игры ${i?.build}`);
	return /** @type {LocalizedString} */ (`Игроки сообщают о противоречивых результатах ${i?.mod} на сборке игры ${i?.build}`)
	
};

const sv_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Spelare rapporterar att ${i?.mod} inte fungerar på spelbygget ${i?.build}`);
	return /** @type {LocalizedString} */ (`Spelare rapporterar blandade resultat för ${i?.mod} på spelbygget ${i?.build}`)
	
};

const tr_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`Oyuncular ${i?.mod} modunun ${i?.build} oyun sürümünde çalışmadığını bildiriyor`);
	return /** @type {LocalizedString} */ (`Oyuncular ${i?.mod} için ${i?.build} oyun sürümünde karışık sonuçlar bildiriyor`)
	
};

const zh_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`玩家反馈 ${i?.mod} 在游戏版本 ${i?.build} 上无法运行`);
	return /** @type {LocalizedString} */ (`玩家反馈 ${i?.mod} 在游戏版本 ${i?.build} 上表现不一`)
	
};

const ja_emails_notify_item_compat_broken = /** @type {(inputs: Emails_Notify_Item_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`ゲームビルド ${i?.build} で ${i?.mod} が動かないという報告があります`);
	return /** @type {LocalizedString} */ (`ゲームビルド ${i?.build} での ${i?.mod} の動作について報告が分かれています`)
	
};

/**
* | status | output |
* | --- | --- |
* | "broken" | "Players report that {mod} is broken on game build {build}" |
* | * | "Players report mixed results for {mod} on game build {build}" |
*
* @param {Emails_Notify_Item_Compat_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_compat_broken = /** @type {((inputs: Emails_Notify_Item_Compat_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Compat_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_compat_broken(inputs)
	if (locale === "de") return de_emails_notify_item_compat_broken(inputs)
	if (locale === "fr") return fr_emails_notify_item_compat_broken(inputs)
	if (locale === "it") return it_emails_notify_item_compat_broken(inputs)
	if (locale === "nl") return nl_emails_notify_item_compat_broken(inputs)
	if (locale === "pl") return pl_emails_notify_item_compat_broken(inputs)
	if (locale === "pt") return pt_emails_notify_item_compat_broken(inputs)
	if (locale === "ru") return ru_emails_notify_item_compat_broken(inputs)
	if (locale === "sv") return sv_emails_notify_item_compat_broken(inputs)
	if (locale === "tr") return tr_emails_notify_item_compat_broken(inputs)
	if (locale === "zh") return zh_emails_notify_item_compat_broken(inputs)
	if (locale === "ja") return ja_emails_notify_item_compat_broken(inputs)
	return en_emails_notify_item_compat_broken(inputs)
});
